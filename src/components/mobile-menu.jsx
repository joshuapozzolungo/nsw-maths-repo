import React from "react"

export default function MobileMenu({isMobileMenuOpen }) {

  if (!isMobileMenuOpen) return null;

  return (
    <nav className="fixed lg:hidden sm:top-30 lg:top-35 z-40 w-full backdrop-blur-2xl">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col space-y-10">
          <a className="text-primary-text">Contribute</a>
          <a className="text-primary-text">Pricing</a>
          <a className="text-primary-text">Leaderboad</a>

          <div className="text-primary-text m-0.5">Content</div>
            <div className="flex flex-col px-6 py-3">
              <a className="py-2 text-primary-text">Questions</a>
              <a className="py-2 text-primary-text">Exercises</a>
              <a className="py-2 text-primary-text">Videos</a>
              <a className="py-2 text-primary-text">Playlists</a>                          
              <a className="py-2 text-primary-text">Tutoring</a>
          </div>
        </div>
      </div>
    </nav>  
  );
};

