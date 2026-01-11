import React from "react"
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

export default function Questions() {
  return (
    <div className="mx-auto max-w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mt-30">
      <div className="h-96 border-1 border-white/20 rounded-2xl p-5">
        <div className="h-full bg-secondary-box border-1 border-white/20 rounded-2xl text-white">
          <Latex> 
            $3^9$
          </Latex> 
        </div>
      </div>
    </div>
  );
};
