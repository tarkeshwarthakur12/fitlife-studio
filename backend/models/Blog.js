const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  comment: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  category: { type: String, required: true, trim: true, index: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  postType: { type: String, enum: ['standard', 'quote'], default: 'standard' },
  quoteText: { type: String },
  quoteAuthor: { type: String, default: 'Tarakeshwar Thakur' },
  featuredImage: { type: String, required: true },
  images: [{ type: String }],
  likes: { type: Number, default: 0 },
  comments: [commentSchema],
  isPublished: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);