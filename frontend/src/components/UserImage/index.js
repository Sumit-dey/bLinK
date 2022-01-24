import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { loadOneImage } from '../../store/userImages';
import DeleteImageModal from '../DeleteImage/DeleteImageModal';
import EditImageModal from '../EditImage/EditImageModal';

import './UserImage.css';
// import { getCommentsThunk } from '../../store/comments';
// import { addCommentThunk } from '../../store/comments';
// import DeleteComment from '../DeleteComment';
// import EditComment from '../EditComment';

function UserImage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const image = useSelector((state) => (state.userImage.current));
    // const comments = useSelector(state => Object.values(state.comments));

    // const [actualComment, setActualComment] = useState('');
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [commentId, setCommentId] = useState('');
    const [commentUserId, setCommentUserId] = useState('');
    const [editingComment, setEditingComment] = useState('');
    const [errors, setErrors] = useState('');

    // const validate = () => {
    //     const validationErrors = [];
    //     if (!actualComment) validationErrors.push('Comment cannot be empty.');
    //     if (actualComment.length > 255) validationErrors.push('Comment cannot exceed 255 characters.');

    //     return validationErrors;
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setErrors([]);

    //     const errors = validate();

    //     if (errors && errors.length > 0) {
    //         return setErrors(errors);
    //     }

    // }

    useEffect(() => (
        dispatch(loadOneImage(id))

    ), [dispatch, id]);

    const sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) return <Redirect to = '/' />;

    if (image.redirect) return <Redirect to = '/profile' />

    return (
        <>
            <div className = 'profile-single-img-container'>
                <div className = 'profile-single-div-style'>
                    <div className = 'profile-single-img-div'>
                        <img
                            className = 'profile-single-img'
                            src = {image.imageUrl}
                            alt = 'car'
                        />
                    </div>
                    <div className = 'profile-single-img-content'>{image.content}</div>
                    <div className = 'profile-single-img-album'>
                        {image.Album?.title}
                    </div>
                    <div className = 'profile-img-button-container'>
                        <div className = 'profile-single-img-buttons'>
                            <EditImageModal
                                image = { image }
                            />
                            <DeleteImageModal
                                image = { image }
                            />
                        </div>
                    </div>
                    {errors.length > 0 && (<div className = 'new-image-errors-div'>
                        <ul className = 'new-image-errors-ul'>
                            { errors.map(error => (
                                <li
                                    className = 'new-image-error-li'
                                    key = { error }
                                >
                                    { error }
                                </li>
                            ))}
                        </ul>
                    </div>)}
                    {/* <form
                        className='homepage-single-img-form'
                        onSubmit={handleSubmit}
                    >
                    </form> */}
                </div>
            </div>
        </>
    )
}

export default UserImage;
