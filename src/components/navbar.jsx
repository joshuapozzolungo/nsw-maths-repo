import React from "react";

const NavBar = () => {
  return (
    <div className="w-full flex justify-between items-center text-white max-w-[1240px]">
      <h1 className="w-full text-3xl font-bold p-5">Better THSC</h1>
      <ul className="flex font-bold">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resouces</li>
        <li className="p-4 cursor-pointer">About</li>
      </ul>
    </div>
  );
};

export default NavBar;
