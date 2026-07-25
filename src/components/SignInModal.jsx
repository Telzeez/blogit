import React from 'react';

export default function SignInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2 className="modal-title">Join Blogit</h2>
        <p className="modal-subtitle">Sign in or create an account to start sharing your knowledge.</p>
        
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" required placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required placeholder="••••••••" />
          </div>
          
          <div className="modal-actions">
            <button type="submit" className="btn btn-outline modal-submit" onClick={() => console.log('Sign In clicked')}>Sign In</button>
            <button type="submit" className="btn btn-dark modal-submit" onClick={() => console.log('Sign Up clicked')}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
