import React, { useEffect, useState } from 'react';
import './index.css';

// Import Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreateBlogForm from './components/CreateBlogForm';
import Filters from './components/Filters';
import BlogCard from './components/BlogCard';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';
import Toast from './components/Toast';

//import services
import { getAllBlog, createBlog, updateBlog, deleteBlog } from './services';


export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(true);

  // const [blogs, setBlogs] = useState([])
  const [message, setMessage] = useState(null)

  // handle like clicks
  const handleLikeClick = async (id, isIncrement) => {

    const targetPost = posts.find(post => post.id === id)
    console.log("clicked: ", targetPost)
    if (!targetPost) return
    if (typeof id === 'number' || String(id).length < 10) {
      handleCustomMessage("Cannot like posts withought a database entry")
      return
    }
    const updatedLikesCount = isIncrement ? targetPost.likes + 1 : Math.max(0, targetPost.likes - 1)

    const updatedSinglePost = { ...targetPost, likes: updatedLikesCount }
    // update ui
    const newPosts = posts.map(post => {
      if (post.id === id) {
        return updatedSinglePost
      }
      return post
    });
    setPosts(newPosts)
    try {

      await updateBlog(targetPost.id, updatedSinglePost)
    } catch (error) {
      handleCustomMessage("failed to like ", error.message)
    }


  }


  const handleCustomMessage = (msg, type = 'success') => {
    setMessage({ text: msg, type })
    setTimeout(() => {
      setMessage(null)
    }, 5000);
  }
  // fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const returnedData = await getAllBlog()
        if (!returnedData) {
          handleCustomMessage("Naija database no gree for us", "error")
          return
        } else {
          setPosts(returnedData)
          handleCustomMessage("Your network strong comerade", "success")

        }

      } catch (error) {
        console.log("failed to fetch blogs: ", error.message)
        handleCustomMessage("Failed to fetch posts", "error")
      }


    }
    fetchBlogs();

  }, [])
  const handlePostSubmit = async (blog) => {
    try {
      const newBlogPost = await createBlog(blog)
      if (!newBlogPost) {
        handleCustomMessage("comerade your post no reach there o")
        return;
      }

      setPosts(prevPosts => [newBlogPost, ...prevPosts])
      handleCustomMessage("Comerade your post don show for here")
    } catch (error) {
      console.error("Failed to create blog:", error.message);
      handleCustomMessage("Failed to save post to database", error.message || "An error occurred");
    }

  }
  return (
    <>
      <Toast message={message} />
      <SignInModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      <main className="container">
        <Hero />
        <CreateBlogForm onPostSubmit={handlePostSubmit} />
        <Filters searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <section>
          {posts.length === 0 ? (
            <p className='no-post'>No posts yet</p>
          ) : (
            <>
              <h2 className="section-title">Latest Knowledge Shared</h2>
              <div className="blog-grid">
                {posts
                  .map((post, index) => (
                    <BlogCard key={index} post={post} onClick={handleLikeClick} />
                  ))}
              </div>

            </>
          )} </section>
      </main>

      <CTASection />
      <Footer />
    </>
  );
}