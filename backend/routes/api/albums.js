const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { Album, Image } = require('../../db/models');

const router = express.Router();

const albumNotFoundError = albumId => {
    const err = new Error(`Album number ${albumId} was not found`);
    err.title = 'Album not found';
    err.status = 404;
    throw err;
};

const editValidation = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide Title for your album.')
];

// Get single album
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const albumId = req.params.id;
    const album = await Album.findByPk(albumId, {
        include: {
            model: Image
        }
    });

    if (album) {
        res.json(album)
    } else {
        next(albumNotFoundError(albumId))
    }
}));


//Edit album

router.put('/:id(\\d+)', editValidation, asyncHandler(async (req, res, next) => {
    const albumId = req.params.id;
    const { userId, title } = req.body;
    const album = await Album.findByPk(albumId);
    const albumUserId = album.userId;
    const editErrors = validationResult(req);

    if (album && userId === albumUserId && editErrors.isEmpty()) {
        await album.update({
            userId,
            title
        });
        res.json(album);
    } else {
        let errors = editErrors.array().map(error => error.msg);
        res.json({ errors });
    }
}));

module.exports = router;
