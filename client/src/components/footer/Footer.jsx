import React from "react";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

function Footer() {
  return (
    <div className="bg-foreground text-background">
    <div className=" px-[2rem] py-[6.4rem] w-full  flex flex-col md:flex-row justify-between  gap-[4rem] align-middle ">
      <div  className="w-[100%] md:w-3/6 flex justify-center flex-col text-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Error 404
    </h1>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      Adarsh | Aniket | Mohit | Sudarsan | Umesh
    </p>
    <div className="flex flex-col  text-center gap-1 justify-end mt-[2rem]">
       
        <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
        <div className="flex justify-center mt-2">
          <Link to="https://github.com/mohitDora/upskill-mafia-mern-hackathon" target="_blank" className="flex">
          <Github />Github
          </Link>
       
        </div>
     
       
      </div>
      </div>
      
      <div className="w-[100%] md:w-3/6 flex flex-col md:flex-row justify-center gap-[4rem]">
        
   
      <div className="flex flex-col text-center gap-1">
        <p className="scroll-m-20 text-xl font-semibold tracking-tight ">
          Links
        </p>
        <Link to="#">Home</Link>
        <Link >services</Link>
        <Link>About</Link>
        <Link >Contact</Link>
      </div>
      {/* <div className="flex flex-col md:text-right text-center gap-1 justify-end">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          About
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
      The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.
    </p>
        <div className="flex justify-center">
          <Link to="https://github.com/mohitDora/upskill-mafia-mern-hackathon" target="_blank">
          <Github />
          </Link>
       
        </div>
     
       
      </div> */}
      </div>
      
    </div>
    <p className="leading-7 [&:not(:first-child)]:mt-6 p-2">
    &copy;copyright @2024
  </p>
  </div>
  );
}

export default Footer;
