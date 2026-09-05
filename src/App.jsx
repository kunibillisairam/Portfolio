import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Journey from "./components/sections/Journey";
import Certifications from "./components/sections/Certifications";
import Education from "./components/sections/Education";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackgroundDecorations from "./components/shared/BackgroundDecorations";

function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div
          className="relative min-h-screen overflow-x-hidden transition-colors duration-300"
          style={{ color: "var(--color-text-1)" }}
        >
          {/* ── Editorial Background Decorations ─────────────────────── */}
          <BackgroundDecorations />

          {/* ── Route Switcher (Always renders PortfolioPage for all paths) ── */}
          <Routes>
            <Route path="*" element={<PortfolioPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
