const Blog = require('../models/Blog');

const slugify = (text) => {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const getBlogs = async (req, res) => {
  try {
    const filter = req.query.admin === 'true' ? {} : { isPublished: true };
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ 
      $or: [
        { slug: req.params.idOrSlug }, 
        { _id: req.params.idOrSlug.match(/^[0-9a-fA-F]{24}$/) ? req.params.idOrSlug : null }
      ] 
    });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id, 
      { $inc: { likes: 1 } }, 
      { new: true }
    );
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, likes: blog.likes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ success: false, message: 'Name and comment are required' });
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(400).json({ success: false, message: 'Blog not found' });

    blog.comments.push({ name, comment });
    await blog.save();

    res.status(201).json({ success: true, comments: blog.comments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, category, description, content, postType, quoteText, quoteAuthor, isPublished, featuredImage: bodyImageUrl } = req.body;
    
    // Handle image from file upload (Cloudinary) or text URL input
    let featuredImage = bodyImageUrl || "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80";
    if (req.files && req.files['featuredImage']) {
      featuredImage = req.files['featuredImage'][0].path;
    }

    const slug = slugify(title) + '-' + Date.now();

    const blog = await Blog.create({
      title,
      slug,
      category,
      description: description || title,
      content: content || quoteText || "Fitness update shared by FitLife Studio.",
      postType: postType || 'standard',
      quoteText,
      quoteAuthor: quoteAuthor || 'Tarakeshwar Thakur',
      featuredImage,
      isPublished: isPublished !== undefined ? isPublished : true
    });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    await blog.deleteOne();
    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    const updateData = { ...req.body };
    if (req.files && req.files['featuredImage']) {
      updateData.featuredImage = req.files['featuredImage'][0].path;
    }
    if (updateData.title && updateData.title !== blog.title) {
      updateData.slug = slugify(updateData.title) + '-' + Date.now();
    }

    blog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true, runValidators: true });
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { getBlogs, getBlogBySlug, likeBlog, addComment, createBlog, updateBlog, deleteBlog };