import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark text-white">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:id" element={<Article />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
