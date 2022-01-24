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
                <h1 className = 'splash-h1'>Find your Inspiration.</h1>
                <h3 className = 'splash-h3'>
                Join the bLink community, home to tens of billions of photos.</h3>
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
