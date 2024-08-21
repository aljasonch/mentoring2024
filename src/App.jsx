import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Faq from "./pages/faq";
import About from "./pages/about";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { Gallery } from "./pages/gallery/index";
import Groups from "./pages/groups";
import LoadingScreen from "./components/loadingScreen";
import { useState, useEffect } from "react";
import Division from "./pages/division";
// import Groups from "./pages/groups";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 2500);
  }, []);
  useEffect(() => {
    window.addEventListener("message", (event) => {
      const { pathname, crossoriginCheck } = event.data;
      if (crossoriginCheck !== "PASS") {
        return;
      }
      if (location.pathname !== pathname) {
        //history.replaceState(null, "", pathname);
        //console.log("pathname", pathname);
        navigate(pathname);
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
        <div className={`fade-out ${fadeOut ? "fade-out-active" : ""}`}>
          <LoadingScreen />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/division" element={<Division />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/collection" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
