import React, { useState } from 'react';
import { Modal } from '../../context/Modal.js';
import './EditAlbum.css'
import EditAlbum from './index.js';

function EditAlbumModal({album}){
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className = 'profile-album-edit-button'
                onClick = {() => setShowModal(true)}>
                Edit
            </button>
            {showModal && (
                <Modal onClose = {() => setShowModal(false)}>
                    <EditAlbum
                        album = { album }
                        setShowModal = { setShowModal }
                    />
                </Modal>
            )}
        </>
    )
}

export default EditAlbumModal;
