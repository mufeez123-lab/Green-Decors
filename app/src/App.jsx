import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Homepage from "./pages/Homepage";
import ProjectsPage from "./pages/Projects"; // Ensure this matches your file name
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About"
import SmoothScroll from './components/gsap';
import Cursor from './components/Cursor';
import WhatsAppButton from './components/Whatsapp';
import ScrollProgress from "./components/ScrollProgress";

// Helper: Scroll to top on every route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <SmoothScroll>
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
          <ScrollProgress /> 
        <Cursor />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
           
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
    </SmoothScroll>
  );
}

export default App;