import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Faq from "./pages/faq/Faq";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import {Gallery} from './pages/gallery/index';


function App() {
  return (
    <div className="mx-auto">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
