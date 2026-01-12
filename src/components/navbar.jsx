import React, {useState} from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavBar({ toggleMobileMenu, isMobileMenuOpen }) {
  
  const [isClicked, setIsClicked] = useState(false);
  
  const DropDownMenuItem = ({heading, description}) => {
    return (
      <div className="flex justify-start items-center space-x-2 p-2 m-2 hover:bg-secondary-box hover:border-1 hover:border-white/20 hover:rounded-lg hover:border-dashed cursor-pointer">
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

  return (
    <header className="sticky top-0 z-50 mx-auto min-h-16 w-full backdrop-blur-2xl pt-3 pb-3 ">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 flex min-h-16 justify-between items-center rounded-full">
        <a className="normal-text flex items-center gap-2 font-semibold text-text-primary duration-300 ease-in-out hover:opacity-80 text-[25px] cursor-pointer">HSC Maths Hub</a>
        <nav className="hidden nav-primary-text ml-auto items-center gap-3 lg:flex font-bold" aria-label="main-navigation">
          <a className="p-2 cursor-pointer hover:underline">CONTRIBUTE</a>
          <a className="p-2 cursor-pointer hover:underline">PRICING</a>
          <div className="">
            <div className="flex justify-center items-center">
              <button 
              onClick={() => setIsClicked(!isClicked)}
              className="p-2 gap-1 cursor-pointer hover:underline">CONTENT
              </button>
              <ChevronDown className={`transition-transform duration-300 ${isClicked ? 'rotate-180' : 'rotate-0'}`}/>
            </div>
            <div className={`${isClicked ? '' : 'hidden'} absolute mt-3 p-2 grid grid-cols-2 h-70 w-135 border-1 border-white/20 rounded-lg`}>
              <DropDownMenuItem heading="QUESTIONS" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="EXERCISE" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="VIDEOS" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="PLAYLISTS" description="Quality Exam Questions"/>
              <DropDownMenuItem heading="TUTORING" description="Quality Exam Questions"/>
            </div>
          </div>
          <a className="p-2 cursor-pointer hover:underline">LEADERBOARD</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="p-2 ml-4 button-primary-button text-[14px] rounded-lg hover:opacity-80 cursor-pointer">LOGIN</button>
          <button className="p-2 ml-1 button-primary-button text-[14px] rounded-lg hover:opacity-80 cursor-pointer">GET STARTED</button>
          <button className="lg:hidden flex items-center justify-center p-2 cursor-pointer"  
             onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"} aria-expanded={isMobileMenuOpen}>
              {isMobileMenuOpen ? <X size={32}/> : <Menu size={32}/>}
          </button>
        </div>
      </div>
    </header>
  );
};


