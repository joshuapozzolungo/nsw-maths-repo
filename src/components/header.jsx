import React, { useState } from "react";
import NavBar from "./navbar.jsx";
import MobileMenu from "./mobile-menu.jsx";

export default function Header() {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  
  return (
    <div>
      <NavBar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen}/>
      <MobileMenu isMobileMenuOpen={isMobileMenuOpen}/>
    </div>
  );
};
