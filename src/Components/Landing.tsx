import { NavLink } from "react-router-dom";
import { MapPin } from "lucide-react";

export const Landing = () => {
  return (
<div className="min-h-[calc(100vh-64px)] flex flex-col justify-between pt-24 pb-12 text-center">
      {/* Top Section */}
      <div className="flex flex-col gap-16 pt-28">
        <p className="text-blue-700 font-bold text-6xl">Naman Matoliya</p>
        <p className="text-white text-2xl">
          I am <span className="text-red-500">24 Years</span> Old Web Developer
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-row gap-6 text-xl mt-8 justify-center text-white">
        <NavLink className="hover:text-red-500 animate-pulse" to="/projects">[Projects]</NavLink>
        <NavLink className="hover:text-red-500 animate-pulse" to="/about">[About]</NavLink>
      </div>

      {/* Footer Section */}
      <div className="flex text-lg justify-between mx-14 text-white">
        <p className="flex"> <MapPin/> <span>Bangalore</span></p>
        <p>@all rights reserved</p>
      </div>
    </div>
  );
};
