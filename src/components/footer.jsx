import React from "react"
import { Copyright } from "lucide-react";

export default function Footer() {
  
  return (
    <footer className="relative gap-x-4 my-20 px-4 mx-auto mb-4 h-auto min-h-[580px] 
      rounded-xl md:min-h[550px] lg:mt-14 lg:mb-10 lg:min-h-[430px] bg-[#101010] lg:rounded-3xl w-[calc(100%-32px)] lg:w-[calc(100%-72px)]">
      <div className="grid grid-cols-2 mx-auto min-h-[280px] md:min-h[250px] lg:min-h:[130px]">
        <div className="flex flex-col pt-10 px-15 space-y-10">
          <a className="font-bold text-2xl">HSC MATHS HUB</a>
          <p>We seek to bridge the gap of the frustrating task of finding questions of specific topics scattered all over the place</p>
          <div>Toggle Light Mode</div>
        </div>
        <div className="">
         <div className="flex justify-center items-center space-x-20 pt-10">

            <div className="space-y-5">
              <h3>Resources</h3>
              <ul className="flex flex-col gap-5">
                <li> <a>Videos</a> </li>
                <li> <a>Playlists</a> </li>
                <li> <a>Tutoring</a> </li>
                <li> <a>Exercises</a> </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3>Connect</h3>
              <ul className="flex flex-col gap-5">
                <li> <a>Contact</a> </li>
                <li> <a>Instagram</a> </li>
                <li> <a>Youtube</a> </li>
                <li> <a>LinkedIn</a> </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3>Company</h3>
              <ul className="flex flex-col gap-5">
                <li> <a>About</a> </li>
                <li> <a>Careers</a> </li>
                <li> <a>Contribute</a> </li>
                <li> <a>Affiliate</a> </li>
              </ul>
            </div>

          </div> 
        </div>
      </div>
      <hr className="border-1 border-white/20"></hr>
      <div className="grid grid-cols-2 mx-auto h-[100px] pt-10 px-10">
        <div className="flex space-x-2">
          <Copyright></Copyright>
          <p>2026 HSC Maths Hub. All rights reserved.</p>
        </div>
        <div className="flex space-x-7 justify-end">
          <a className="hover:underline cursor-pointer">Privacy Policy</a>
          <a className="hover:underline cursor-pointer">Terms of Service</a>
          <a className="hover:underline cursor-pointer">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );

};
