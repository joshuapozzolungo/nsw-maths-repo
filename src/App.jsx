import React, { useState } from "react";
import NavBar from "./components/navbar.jsx";
import MobileMenu from "./components/mobile-menu.jsx";
import Hero from "./components/hero.jsx";
import Questions from "./components/questions.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

export default function App() {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div>
      <NavBar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen}/>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen}/>
      <Hero/>
      <Questions/>
      <Footer />
    </div>
  );
}


