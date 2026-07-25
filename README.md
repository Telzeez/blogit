# Blogit

Blogit is a single-page React application designed for developers and lifelong learners to document and share their learning journey. Users can post the concepts they've mastered and link directly to the resources, tutorials, or documentation sites they used to learn them. 

It features a clean, professional, premium UI with text-based cards and built-in search and filtering.

## 🚀 Features

- **Share Your Learnings**: Easily create new posts logging what you learned, your name, category, and the resource link.
- **Reference Links**: Posts prominently feature a "Reference Site" button allowing visitors to immediately access the resources you used.
- **Search & Filter**: Instantly search posts by keyword or filter them by popular categories.
- **Premium Design**: Clean, text-first aesthetic with custom SVG icons, soft shadows, and a modern color palette.
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

**Frontend:**
- [React 19](https://react.dev/) - UI framework
- [Vite](https://vitejs.dev/) - Lightning-fast build tool
- Pure CSS - Custom styling without heavy utility frameworks
- [Axios](https://axios-http.com/) - For handling API requests

**Backend (Planned/Integrated):**
- Expected to integrate with a Node.js API using `mongoose` based on the schema:
  ```javascript
  const blogSchema = new mongoose.Schema({
      title: String,
      author: String,
      url: String, // Reference site used for learning
      likes: Number
  })
  ```

## 📂 Folder Structure

The frontend code has been cleanly modularized for easy maintenance and scaling:

```
src/
├── components/
│   ├── BlogCard.jsx       # The text-based learning card
│   ├── CreateBlogForm.jsx # Form to submit new learnings
│   ├── CTASection.jsx     # Call to action section
│   ├── Filters.jsx        # Search and category tags
│   ├── Footer.jsx         # Page footer
│   ├── Hero.jsx           # Top hero section
│   ├── Icons.jsx          # Reusable professional SVG icons
│   └── Navbar.jsx         # Top navigation bar
├── App.jsx                # Main container bringing all components together
├── index.css              # Global styles and design system
└── main.jsx               # React entry point
```

## 💻 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository (or download the source).
2. Navigate to the project directory:
   ```bash
   cd blogPage
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173/` (or the port specified by Vite).

## 📝 Next Steps

- Hook up the `handlePostSubmit` logic in `App.jsx` to push data to your backend database via Axios.
- Implement pagination or infinite scrolling if the list of learnings gets too long.
