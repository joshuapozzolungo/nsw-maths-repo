import React, {useState, useEffect} from "react"
import { Copyright, Sun, Moon, Monitor } from "lucide-react";
import { motion } from "motion/react"

export default function Footer() {

  const [activeTab, setActiveTab] = useState("monitor");
  const tabs = [
      { id: "monitor", icon: Monitor },
      { id: "sun", icon: Sun },
      { id: "moon", icon: Moon },
  ];

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    if (activeTab === "monitor") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
    }
    else {
      root.classList.add(activeTab === "moon" ? "dark" : "light")
    }
  }, [activeTab]);

  return (
    <footer className="relative gap-x-4 my-20 px-4 mx-auto mb-4 h-auto min-h-[580px] 
      rounded-xl md:min-h[550px] lg:mt-14 lg:mb-10 lg:min-h-[430px] bg-secondary lg:rounded-3xl w-[calc(100%-32px)] lg:w-[calc(100%-72px)]">
      <div className="grid grid-cols-2 mx-auto min-h-[280px] md:min-h[250px] lg:min-h:[130px]">
        <div className="flex flex-col pt-10 px-15 space-y-10">
          <a className="font-bold text-2xl">HSC MATHS HUB</a>
          <p className="footer-sub-heading cursor-default">We seek to bridge the gap of the frustrating task of finding questions of specific topics scattered all over the place</p>
          <div className="flex relative justify-between items-center w-45 h-10 rounded-full bg-secondary/50 p-1">
            <motion.div 
              layoutId="active-pill" 
              className="absolute h-8 rounded-full bg-white/10 border-white/20"
              initial={false}
              animate={{
                width: "calc(33.33% - 4px)",
                x : activeTab === "monitor" ? 2 : activeTab === "sun" ? "100%" : "200%",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            ></motion.div>
            <div className="flex-1 flex justify-center"><Monitor className={`cursor-pointer ${activeTab === "monitor" ? "text-white" : "text-white/60 hover:text-white"}`} onClick={() => setActiveTab("monitor")}></Monitor></div>
            <div className="flex-1 flex justify-center text-white/60"><Sun className={`cursor-pointer ${activeTab === "sun" ? "text-white" : "text-white/60 hover:text-white"}`} onClick={() => setActiveTab("sun")}></Sun></div>
            <div className="flex-1 flex justify-center text-white/60"><Moon className={`cursor-pointer ${activeTab === "moon" ? "text-white" : "text-white/60 hover:text-white"}`} onClick={() => setActiveTab("moon")}></Moon></div>
          </div>
        </div>
        <div className="">
         <div className="flex justify-center items-center space-x-20 pt-10">

            <div className="space-y-5">
              <h3>Resources</h3>
              <ul className="flex flex-col gap-5">
                <li> <a className="footer-sub-heading hover:underline">Videos</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Playlists</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Tutoring</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Exercises</a> </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3>Connect</h3>
              <ul className="flex flex-col gap-5">
                <li> <a className="footer-sub-heading hover:underline">Contact</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Instagram</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Youtube</a> </li>
                <li> <a className="footer-sub-heading hover:underline">LinkedIn</a> </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3>Company</h3>
              <ul className="flex flex-col gap-5">
                <li> <a className="footer-sub-heading hover:underline">About</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Careers</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Contribute</a> </li>
                <li> <a className="footer-sub-heading hover:underline">Affiliate</a> </li>
              </ul>
            </div>

          </div> 
        </div>
      </div>
      <hr className="border-1 border-white/5"></hr>
      <div className="grid grid-cols-2 mx-auto h-[100px] pt-10 px-10">
        <div className="flex space-x-2">
          <Copyright className="text-white/60 w-5 h-5"></Copyright>
          <p className="footer-sub-heading cursor-default">2026 HSC Maths Hub. All rights reserved.</p>
        </div>
        <div className="flex space-x-7 justify-end">
          <a className="footer-sub-heading hover:underline">Privacy Policy</a>
          <a className="footer-sub-heading hover:underline">Terms of Service</a>
          <a className="footer-sub-heading hover:underline">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );

};
