import React, { useState } from 'react';
import './index.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreateBlogForm from './components/CreateBlogForm';
import Filters from './components/Filters';
import BlogCard from './components/BlogCard';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Initial Mock Data
const initialPosts = [
  {
    title: "Understanding React UseEffect Hook",
    author: "Jane Doe",
    url: "https://react.dev/reference/react/useEffect",
    likes: 124,
    category: "React"
  },
  {
    title: "Mastering CSS Grid Layouts",
    author: "John Smith",
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
    likes: 89,
    category: "CSS"
  },
  {
    title: "Advanced TypeScript Patterns",
    author: "Alice Johnson",
    url: "https://www.typescriptlang.org/docs/handbook/advanced-types.html",
    likes: 210,
    category: "TypeScript"
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const [message, setMessage] = useState("");

  const handlePostSubmit = (newPost) => {
    setPosts([newPost, ...posts]);
  };
  
  return (
    <>
      <Navbar />

      <main className="container">
        <Hero />
        <CreateBlogForm onPostSubmit={handlePostSubmit} />
        <Filters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <section>
          <h2 className="section-title">Latest Knowledge Shared</h2>
          <div className="blog-grid">
            {posts
              .filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              post.category.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </>
  );
}