import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch,Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SplashPage from './components/SplashPage';
import SignupFormPage from "./components/SignupFormPage";
import AllAlbums from './components/AllAlbums';
import ImageDetail from './components/ImageDetail';
import AddAlbum from './components/AddAlbum';
import AddImage from './components/AddImage';
import HomePage from './components/HomePage';
import SingleAlbum from './components/SingleAlbum';
import Navigation from "./components/Navigation";
import UserProfile from './components/UserProfile';
import UserImage from './components/UserImage';
import * as sessionActions from "./store/session";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path = '/'>
            <SplashPage />
          </Route>
          <Route exact path = '/homepage'>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path = '/homepage/images/:id'>
            <ImageDetail />
          </Route>
          <Route path = '/profile/images/upload'>
            <AddImage />
          </Route>
          <Route exact path = '/profile'>
            <UserProfile />
          </Route>
          <Route path = '/profile/images/:id'>
            <UserImage />
          </Route>
          <Route exact path = '/albums'>
            <AllAlbums />
          </Route>
          <Route path = '/albums/add'>
            <AddAlbum />
          </Route>
          <Route path = '/albums/:id'>
            <SingleAlbum />
          </Route>
          <Route>
            <Redirect to = '/homepage' />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
