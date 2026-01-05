import React, {useState} from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";

const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
  <header className="sticky top-0 z-50 mx-auto min-h-16 w-full bg-background/30 backdrop-blur-2xl pt-[3%] pb-[3%]">
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
           onClick={toggleMenu} aria-label={isOpen ? "Close Mobile Menu" : "Open Mobile Menu"} aria-expanded={isOpen}>
          <svg xlmns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu">
            <path d="M4 9 h23"></path>
            <path d="M4 18 h23"></path>
            <path d="M4 27 h23"></path>
          </svg> 
        </button>
      </div>
    </div>

      
  </header>
  );
};

export default NavBar;
