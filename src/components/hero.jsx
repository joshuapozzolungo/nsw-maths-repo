import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto max-w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-45">
      <div className="max-w-4xl">
        <div className="flex text-primary-text space-x-7 mb-6 opacity-60">
          <div className="max-w-md">
            <div className="flex">
              <div className="flex items-center justify-items-center pr-2">
                 <span className="flex h-3 w-3 bg-red-600 rounded-full animate-pulse"></span>
              </div>
              <div>100 people online</div>
            </div>
          </div>

          
          <div>|</div>
              <div className="max-w-md">
          <div className="flex">
            <div className="flex items-center justify-items-center pr-2">
               <span className="flex h-3 w-3 bg-green-500 rounded-full animate-pulse"></span>
            </div>
            <div>40 members online</div>
          </div>
        </div>

      </div>
        <h1 className="max-w-2xl text-4xl text-primary-text text-bold">Practice thousands of problems and hundreds of exam questions</h1>
        <p className="max-w-md mt-4 text-primary-text opacity-60"> Smash your exams and HSC to land your dream ATAR. Sharpen your mathematical ability and problem solving skills with quality resources </p>
        <div className="mt-7">
          <button className="p-3 button-primary-button rounded-xl hover:opacity-80 cursor-pointer"> Get Cracked </button>
        </div>
      </div>

    </div>
  
  );
};

