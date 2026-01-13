import React, { useRef, useEffect } from "react";

export default function Hero() {

  const calculatorRef = useRef(null);
  const calculatorInstance = useRef(null);
  
  // Logic for Desmos Calculator API
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    if (window.Desmos && calculatorRef.current && !calculatorInstance.current) {
      calculatorInstance.current = window.Desmos.GraphingCalculator(calculatorRef.current, {
        invertedColors: mediaQuery.matches,
        border: false
      });
    }
    
    const handleThemeChange = (e) => {
      if (calculatorInstance.current) {
        calculatorInstance.current.updateSettings({
          invertedColors: e.matches
        });
      }
    };

    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
      if (calculatorInstance.current) {
        calculatorInstance.current.destroy();
        calculatorInstance.current = null;
      }
    };

  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-center align-items-center mx-auto max-w-full max-w-screen-xl sm:px-7 lg:px-8">
      <div className="max-w-4xl mt-45">
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
      <div className="mt-37" ref={calculatorRef} style={{width: "600px", height: "400px"}}></div>
    </div>
  
  );
};

