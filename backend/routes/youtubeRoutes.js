const express = require('express');
const router = express.Router();
const { getChannelVideos } = require('../controllers/youtubeController');

router.get('/videos', getChannelVideos);

module.exports = router;