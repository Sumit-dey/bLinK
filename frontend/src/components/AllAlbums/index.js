import React, { useEffect } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { allAlbums } from '../../store/albums';

import './AllAlbums.css'

function AllAlbums() {
    const dispatch = useDispatch();
    const albums = useSelector((state) => Object.values(state.albums.all));
    const sessionUser = useSelector(state => state.session.user);

    let userId;
    if (sessionUser) {
        userId = sessionUser.id;
    }

    useEffect(() => {
        dispatch(allAlbums(userId))
    }, [dispatch, userId]);

    if (!sessionUser) return <Redirect to = '/' />;

    return (
        <div className = 'all-albums-container'>
            <div className = 'all-albums-title'>
                <h1 className = 'all-albums-header'>
                    { sessionUser.username }'s Albums
                </h1>
                <NavLink
                    className = 'new-album'
                    to = '/albums/add'
                >
                    New Album
                </NavLink>
            </div>
            <div className = 'all-albums-div'>
                { albums.length > 0 ? albums.map(album => (
                    <NavLink
                        className = 'all-albums-nav-wrapper'
                        to = {`/albums/${album?.id}`}
                        key = { album?.id }
                    >
                        <img
                            className = 'all-albums-display'
                            src = {album?.Images?.length > 0 ?
                                `${album?.Images[0].imageUrl}` : null}
                            alt = ''
                        />
                        <img
                            className = 'all-albums-display'
                            src = {album?.Images?.length < 1 ?
                                "https://www.lifewire.com/thmb/2KYEaloqH6P4xz3c9Ot2GlPLuds=/1920x1080/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg" : null}
                            alt = ''
                        />

                        <div className = 'all-albums-info'>
                            <div className = 'all-albums-field'>{album?.title}</div>
                            <div
                                className = 'all-albums-field photo-count'
                            >
                                {album?.Images?.length}
                                {album?.Images?.length < 2 && album?.Images?.length > 0
                                    ? ' photo' : ' photos'}
                            </div>
                        </div>
                    </NavLink>
                )): null}
            </div>
        </div>
    )
}

export default AllAlbums;
