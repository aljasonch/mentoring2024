import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Faq from "./pages/faq";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


function App() {
  return (
      <div className="mx-auto">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
