import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./index.scss"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Error from "./pages/Error/Error"
import Footer from "./components/footer/Footer"


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
