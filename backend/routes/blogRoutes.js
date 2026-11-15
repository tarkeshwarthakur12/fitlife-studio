const express = require('express');
const router = express.Router();
const { getBlogs, getBlogBySlug, likeBlog, addComment, createBlog, deleteBlog } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../config/cloudinary');

router.route('/')
  .get(getBlogs)
  .post(protect, upload.fields([{ name: 'featuredImage', maxCount: 1 }, { name: 'images', maxCount: 5 }]), createBlog);

router.route('/:idOrSlug')
  .get(getBlogBySlug);

router.post('/:id/like', likeBlog);
router.post('/:id/comment', addComment);

router.route('/:id')
  .delete(protect, deleteBlog);

module.exports = router;