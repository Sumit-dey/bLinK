const express = require('express');
const asyncHandler = require('express-async-handler');


const router = express.Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const imageRouter = require('./images.js');
const profileRouter = require('./profile.js');
const albumRouter = require('./albums');
const commentRouter = require('./comments.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/images', imageRouter);
router.use('/profile', profileRouter);
router.use('/albums', albumRouter);
router.use('/comments', commentRouter);

router.post('/test', (req, res) => {
    res.json({
        requestBody: req.body
    })
});

module.exports = router;
