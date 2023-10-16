import AuthorPage from './components/author/AuthorPage'
import BlogPage from './components/blog/BlogPage'
import Home from './components/home/Home'
import Layout from './components/layout/Layout'
import { Routes, Route } from "react-router-dom"
import ScrollToTop from './components/shared/ScrollToTop'


function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blogs/:slug" element={<BlogPage />}/>
          <Route path="/authors/:slug" element={<AuthorPage />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
