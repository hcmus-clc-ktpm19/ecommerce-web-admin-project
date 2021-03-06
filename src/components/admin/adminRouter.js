const express = require('express');
const router = express.Router();

const uploader = require('../../config/multer.config');

const controller = require('./adminController');

// GET Method
router.get('/page', controller.paging);
router.get('/add-admin', controller.renderAddAdmin);
router.get('/profile', controller.renderProfile);
// router.get('/:id', controller.get);

// POST Method
router.post('/', controller.insert);
// router.post('/generate-fake-data', controller.generateFakeData);

// PUT Method
router.put('/:id', controller.update);
router.put('/change-password/:id', controller.changePassword);

// PATCH Method
router.patch('/:id', controller.banAdmin);
router.patch('/change-avatar/:id', uploader.single('avatar_url'), controller.changeAvatar);

module.exports = router;