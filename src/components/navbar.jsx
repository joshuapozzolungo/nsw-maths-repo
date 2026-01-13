import React, {useState} from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const DropDownMenuItem = ({heading, description}) => {
  return (
    <div className="flex justify-start items-center space-x-2 p-2 m-1 hover:bg-secondary-box hover:border-1 hover:border-white/20 hover:rounded-lg hover:border-dashed cursor-pointer">
      <div className="flex justify-center items-center h-[45px] w-[45px] border-1 border-white/20 rounded-lg ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-files-icon lucide-files"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"/><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"/><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"/></svg>
      </div>
        <div>
          <h3 className="nav-primary-text">{heading}</h3>
          <p className="text-drop-down-text opacity-60">{description}</p>
        </div>
    </div>
  );
};

export default function NavBar({ toggleMobileMenu, isMobileMenuOpen }) {
  
  const [isHovering, setIsHovering] = useState(false);
  const toggleHover = () => setIsHovering(!isHovering);
  
  return (
    <header className="sticky top-0 z-50 mx-auto min-h-16 w-full backdrop-blur-2xl pt-3 pb-3 ">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex min-h-16 justify-between items-center rounded-full">
        <a className="normal-text flex items-center gap-2 font-semibold text-text-primary duration-300 ease-in-out hover:opacity-80 text-[25px] cursor-pointer">HSC Maths Hub</a>
        <nav className="hidden nav-primary-text ml-auto items-center gap-3 lg:flex font-bold" aria-label="main-navigation">
          <div className="relative flex-col" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <div className="flex justify-center items-center">
              <button 
              className="p-2 gap-1 cursor-pointer ">CONTENT
              </button>
              <ChevronDown className={`transition-transform duration-300 ${isHovering ? 'rotate-180' : 'rotate-0'}`}/>
            </div>
            <div className={`${isHovering ? '' : 'hidden'} absolute bg-black top-full left-1/2 -translate-x-1/2 p-2 grid grid-cols-2 h-63 w-135 border-1 border-white/20 rounded-lg`}>
              <DropDownMenuItem heading="QUESTIONS" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="EXERCISE" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="VIDEOS" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="PLAYLISTS" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="TUTORING" description="Quality Exam Questions"/>
            </div>
          </div>
          <a className="p-2 group transition duration-300 hover:text-yellow-500 cursor-pointer">CONTRIBUTE
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-500"></span>
          </a>
          <a className="p-2 group transition duration-300 hover:text-yellow-500 cursor-pointer">PRICING
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-500"></span>
          </a>
          <a className="p-2 group transition duration-300 hover:text-yellow-500 cursor-pointer">LEADERBOARD
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-400 h-0.5 bg-yellow-500"></span>
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="ml-4 px-2 py-1 button-primary-button text-[12px] rounded-md hover:opacity-80 cursor-pointer">LOG IN</button>
          <button className="px-2 py-1 button-primary-button text-[12px] bg-[#1F1D1C] text-white rounded-md hover:opacity-80 cursor-pointer">GET STARTED</button>
          <button className="lg:hidden flex items-center justify-center p-2 cursor-pointer"  
             onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"} aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X size={32}/> : <Menu size={32}/>}
          </button>
        </div>
      </div>
    </header>
  );
};


