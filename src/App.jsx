// import React from 'react';
import { BrowserRouter, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
// import Navbar from "./components/navbar/Navbar";
// import Home from "./components/home/Home";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/About';
import Contact from "./components/contact/Contact";
import Products from './components/products/Products';
import i18n from "./i18n";
const LanguageWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const pathLang = location.pathname.split("/")[1]; // Get the first part of the path
    if (["en", "th"].includes(pathLang)) {
      i18n.changeLanguage(pathLang);
    }
  }, [location]);

  return children;
};
const basename = process.env.NODE_ENV === "production" ? "/web-static" : "/";
function App() {
  return (
    // <div className="container mt-5">
    //   <h1 className="text-primary">Hello, Bootstrap with Vite!</h1>
    //   <button className="btn btn-success">Click Me</button>
    // </div>
    <BrowserRouter basename={basename}>
      <Navbar />
      <LanguageWrapper>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:lang/home" element={<Home />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/products" element={<Products />} />
          <Route path="/:lang/contact" element={<Contact />} />
          {/* <Route path="/:lang/career" element={<Career />} />
          <Route path="/:lang/history" element={<HistoryComp />} />
          <Route path="/:lang/prize" element={<Prize />} />
          <Route path="/:lang/activity" element={<Activity />} /> */}

        </Routes>
      </LanguageWrapper>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;