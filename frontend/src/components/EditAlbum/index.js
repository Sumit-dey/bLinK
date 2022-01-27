import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { editOneAlbum } from '../../store/albums';

function EditAlbum({album, setShowModal}){
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const { id } = sessionUser;
    const [title, setTitle] = useState(album.title);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const validationErrors = [];
        if (!title) validationErrors.push('Please provide title for your album.');

        return validationErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors && errors.length > 0) {
            return setErrors(errors);
        }

        const editedAlbum = {
            id: album.id,
            userId: id,
            title
        }

        dispatch(editOneAlbum(editedAlbum));
        history.push('/profile');
    }

    if (!sessionUser) return <Redirect to = '/' />

    return (
        <div className = 'edit-image-form-container'>
            <div className = 'edit-image-form-div'>
                <p id = 'edit-image-p'>Edit Album</p>
                {errors.length > 0 && (
                    <div className = 'edit-image-errors-div'>
                        <ul className = 'edit-image-errors-ul'>
                            { errors.map(error => (
                                <li
                                    className = 'edit-image-error-li'
                                    key = { error }
                                >
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <form
                    className = 'edit-image-form'
                    onSubmit = { handleSubmit }
                >
                    <input
                        className = 'edit-image-field'
                        placeholder = 'Title'
                        value = { title }
                        onChange = { e => setTitle(e.target.value) }
                    />
                    {/* <input
                        className = 'edit-image-field'
                        placeholder = 'AlbumId Placeholder (change)'
                        value = { albumId }
                        onChange = { e => setAlbumId(e.target.value) }
                    /> */}
                    <button
                        className = 'edit-image-field edit-image-submit'
                        type = 'submit'
                    >
                        Save
                    </button>
                    <button
                        onClick = {() => setShowModal(false)}
                        className = 'edit-image-field edit-image-cancel'
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
    )
}


export default EditAlbum;
