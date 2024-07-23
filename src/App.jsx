import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Faq from "./pages/faq";
import About from "./pages/about";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Gallery } from "./pages/gallery/index";
import LoadingScreen from "./components/loadingScreen";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
     setLoading(false);
    }, 2500);

  }, []);
  useEffect(() => {
    window.addEventListener("message", (event) => {
      const { pathname, crossoriginCheck } = event.data;
      if (crossoriginCheck !== "PASS") {
        return;
      }
      if (location.pathname !== pathname) {
        history.replaceState(null, "", pathname);
      }
    });
    window.parent.postMessage(
      { pathname: location.pathname, crossoriginCheck: "PASS" },
      "*"
    );
  }, []);

  useEffect(() => {
    window.parent.postMessage(
      { pathname: location.pathname, crossoriginCheck: "PASS" },
      "*"
    );
  }, [location]);


  return (
    <div className="mx-auto">
      {loading ? (
        <LoadingScreen />
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
