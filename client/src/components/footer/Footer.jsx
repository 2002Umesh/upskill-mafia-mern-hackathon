import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

function Footer() {
  return (
    <div className="bg-border">
    <div className="bg-border px-[2rem] py-[6.4rem] w-full  flex flex-col md:flex-row justify-between  gap-[4rem] align-middle ">
      <div  className="w-[100%] md:w-2/6 flex justify-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Error 404
    </h1>
      </div>
      <div className="w-[100%] md:w-2/6 flex flex-col md:flex-row justify-center gap-[4rem]">
        
   
      <div className="flex flex-col justify-center  text-center gap-1">
        <p className="scroll-m-20 text-xl font-semibold tracking-tight ">
          Links
        </p>
        <Link >Home</Link>
        <Link >services</Link>
        <Link>About</Link>
        <Link >Contact</Link>
      </div>
      <div className="flex flex-col justify-center text-center gap-1">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          About
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
        <div className="flex justify-center">
        <Github />
        </div>
     
       
      </div>
      </div>
      
    </div>
    <p className="leading-7 [&:not(:first-child)]:mt-6 p-2">
    &copy;copyright @2024
  </p>
  </div>
  );
}

export default Footer;
