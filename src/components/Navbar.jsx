import React from 'react';

export default function Navbar() {
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
        <button className="btn btn-outline">Sign In</button>
        <button className="btn btn-dark">Get Started</button>
      </div>
    </nav>
  );
}
