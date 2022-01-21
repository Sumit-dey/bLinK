import React from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './SplashPage.css';

function SplashPage() {
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) return <Redirect to = '/homepage' />;

    return (
        <div className = 'splash-container'>
            <div className = 'splash-content-div'>
                <h1 className = 'splash-h1'>Find your inspiration.</h1>
                <h3 className = 'splash-h3'>
                    Join the bLinK community, home to tons of billions of photos of your favourite moments.
                </h3>
                <NavLink
                    className = 'splash-signup-link'
                    to = '/signup'>
                        Join for Free
                </NavLink>
            </div>
        </div>
    )
}

export default SplashPage;
