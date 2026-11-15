const API_BASE_URL = 'https://fitlife-studio.onrender.com';

const api = {
  async getVideos() {
    try {
      const res = await fetch(`${API_BASE_URL}/youtube/videos`);
      const data = await res.json();
      return data.success ? data.data : [];
    } catch (err) {
      console.error('Error fetching videos:', err);
      return [];
    }
  },

  async getBlogs(admin = false) {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs?admin=${admin}`);
      const data = await res.json();
      return data.success ? data.data : [];
    } catch (err) {
      console.error('Error fetching blogs:', err);
      return [];
    }
  },

  async getBlogBySlug(idOrSlug) {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${idOrSlug}`);
      const data = await res.json();
      return data.success ? data.data : null;
    } catch (err) {
      console.error('Error fetching blog detail:', err);
      return null;
    }
  },

  async likeBlog(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${id}/like`, { method: 'POST' });
      return await res.json();
    } catch (err) {
      console.error('Error liking blog:', err);
      return { success: false };
    }
  },

  async addComment(id, name, comment) {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${id}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, comment })
      });
      return await res.json();
    } catch (err) {
      console.error('Error adding comment:', err);
      return { success: false };
    }
  },

  async login(username, password) {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    return await res.json();
  },

  async createBlog(formData, token) {
    const res = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    return await res.json();
  },

  async deleteBlog(id, token) {
    const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return await res.json();
  }
};