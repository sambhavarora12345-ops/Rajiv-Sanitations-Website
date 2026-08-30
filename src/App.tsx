import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Loader from './components/layout/Loader'
import Maintenance from './pages/Maintenance'
import Home from './pages/Home'
import About from './pages/About'
import Brands from './pages/Brands'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'

const MAINTENANCE_MODE = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function App() {
  if (MAINTENANCE_MODE) {
    return <Maintenance />
  }

  return (
    <BrowserRouter>
      <Loader />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:sub" element={<ProductCategory />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
