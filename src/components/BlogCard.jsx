import React from 'react';
import { HeartIcon, LinkIcon } from './Icons';

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <span className="card-tag">{post.category || "General"}</span>
      <h3 className="card-title">{post.title}</h3>
      <p className="card-author">By {post.author}</p>
      
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="card-link">
        <LinkIcon /> Reference Site
      </a>
      
      <div className="card-meta">
        <span className="likes">
          <HeartIcon />
          {post.likes}
        </span>
      </div>
    </div>
  );
}
