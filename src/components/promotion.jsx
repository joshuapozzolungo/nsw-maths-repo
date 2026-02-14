import React from "react";

export default function Promotion() {
  return (
    <section id="promotion" className="min-h-screen space-y-15">
      <div className="text-center space-y-5">
        <p className="header-text">Land your dream ATAR</p>
        <p className="paragraph-text">Join hundreds of students who are getting better HSC Maths Marks</p>
      </div>
      <div className="flex justify-center">
        <button className="button-primary-button p-3 rounded-xl cursor-pointer hover:opacity-80">Get Started - For Free!</button>
      </div>
      <div className="flex justify-center gap-5">
        <div className="flex gap-2 items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <p className="paragraph-text">hundreds of exam questions</p>
        </div>
        <div className="flex gap-3 items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <p className="paragraph-text">Tutoring/help by 95+ ATAR tutors</p>
        </div>
        <div className="flex gap-3 items-center">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <p className="paragraph-text">detailed solutions and video playlists</p>
        </div>

      </div>
    </section>
  );
}
