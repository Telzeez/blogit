import React, { useState } from 'react';

export default function CreateBlogForm({ onPostSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    url: '',
    category: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCreateBlog = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author || !formData.url) return;
    
    onPostSubmit({
      title: formData.title,
      author: formData.author,
      url: formData.url,
      category: formData.category || "General",
      likes: 0
    });
    
    // Reset form
    setFormData({ title: '', author: '', url: '', category: '' });
  };

  return (
    <section className="create-blog-section">
      <h2>Create a New Post</h2>
      <form onSubmit={handleCreateBlog} className="create-form">
        <div className="form-group full-width">
          <label>What did you learn?</label>
          <input 
            type="text" 
            name="title" 
            required 
            placeholder="e.g. How to use React Context API" 
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Reference Site (URL)</label>
          <input 
            type="url" 
            name="url" 
            required 
            placeholder="https://..." 
            value={formData.url}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Author Name</label>
          <input 
            type="text" 
            name="author" 
            required 
            placeholder="Your Name" 
            value={formData.author}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Category (Optional)</label>
          <input 
            type="text" 
            name="category" 
            placeholder="e.g. React, Python, CSS" 
            value={formData.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-submit">
          <button type="submit" className="btn btn-dark">Post to Blogit</button>
        </div>
      </form>
    </section>
  );
}
