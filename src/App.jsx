import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Faq from "./pages/faq";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Gallery } from "./pages/gallery/index";
import LoadingScreen from "./components/loadingScreen";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Durasi fade-out harus sama dengan durasi animasi di CSS (0.5s)
    }, 2500);
  }, []);

  return (
    <div className="mx-auto">
      {loading ? (
        <div className={`fade-out ${fadeOut ? 'fade-out-active' : ''}`}>
          <LoadingScreen />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/collection" element={<Gallery />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
