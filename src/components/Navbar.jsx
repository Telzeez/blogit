import React from 'react';

export default function Navbar({ onOpenModal }) {
  return (
    <nav className="container navbar">
      <a href="#" className="logo">
        <div className="logo-text">Blogit</div>
      </a>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Community</a>
      </div>
      <div className="nav-actions">
        <button className="btn btn-outline" onClick={onOpenModal}>Sign In</button>
        <button className="btn btn-dark" onClick={onOpenModal}>Get Started</button>
      </div>
    </nav>
  );
}
