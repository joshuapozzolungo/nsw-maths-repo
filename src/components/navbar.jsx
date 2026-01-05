import React, {useState} from "react";
import { Menu, X } from "lucide-react";

export default function NavBar({ toggleMobileMenu, isMobileMenuOpen }) {
  
  return (
    <header className="sticky top-0 z-50 mx-auto min-h-16 w-full bg-background/30 backdrop-blur-2xl pt-3 pb-3">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex min-h-16 justify-between items-center text-white rounded-full">
        <a className="normal-text flex items-center gap-2 font-semibold text-text-primary duration-300 ease-in-out hover:opacity-80 text-[25px] cursor-pointer">HSC Maths Hub</a>
        <nav className="hidden items-center gap-6 lg:flex font-bold" aria-label="main-navigation">
          <a className="p-2 cursor-pointer hover:underline">Contribute</a>
          <a className="p-2 cursor-pointer hover:underline">Pricing</a>
          <a className="p-2 cursor-pointer hover:underline">Content</a>
          <a className="p-2 cursor-pointer hover:underline">Leaderboard</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-3 text-black font-semibold bg-white rounded-xl hover:opacity-80 cursor-pointer">Get Started</button>
          <button className="lg:hidden flex items-center justify-center p-2 cursor-pointer"  
             onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"} aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X size={32}/> : <Menu size={32}/>}
          </button>
        </div>
      </div>
    </header>
  );
};


