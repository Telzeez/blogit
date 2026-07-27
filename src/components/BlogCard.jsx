import React, { useState } from 'react';
import { HeartIcon, LinkIcon } from './Icons';
import LikeButton from './LikeButton';
export default function BlogCard({ post, onClick }) {
  const [hasLiked, setHasLiked] = useState(false)
  const handleToggleClick = () => {
    const nextLikedState = !hasLiked;
    setHasLiked(nextLikedState)

    onClick(post.id, nextLikedState)
  }
  return (
    <div className={`blog-card ${hasLiked ? 'liked-active' : ''}`}>
      <h3 className="card-title">{post.title}</h3>
      <p className="card-author">By {post.author}</p>

      <a href={post.url} target="_blank" rel="noopener noreferrer" className="card-link">
        <LinkIcon /> Reference Site
      </a>

      <div className="card-meta">
        <LikeButton onClick={handleToggleClick} isLiked={hasLiked} />

        <span className={`${hasLiked ? 'active' : ''} likes`}>
          <HeartIcon fill={hasLiked ? "red" : "none"} />
          {post.likes || 0}
        </span>
      </div>
    </div>
  );
}
