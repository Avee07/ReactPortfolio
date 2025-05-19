import React from "react";
import {TypeAnimation} from 'react-type-animation'
import { FaTwitter, FaFacebookF, FaLinkedinIn ,FaInstagram } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left "
        src="https://c4.wallpaperflare.com/wallpaper/974/565/254/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[600px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-800"> I'm Arwinder Singh</h1>
            <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
      sequence={[
        
        'I am a full stack web developer with a passion for building web applications ',
        1000, 
        'I am passionate about learning  technologies',
        1000,
        'I am a Developer',
        2000,
        'I am a Coder',
        2000,
        'This is a new deployment',
        2000,
        'This is a new deployment by docker',
        2000,
      ]}
      wrapper="div"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' , padding:'5px' }}
      repeat={Infinity}
    />
            </h2>
            <div className="flex justify-between pt-6 max-w-[200px] w-full">
              <FaTwitter   size ={20}  className='cursor-pointer' />
              <FaFacebookF size ={20}  className='cursor-pointer' />
              <FaInstagram size ={20}  className='cursor-pointer' />
              <FaLinkedinIn size ={20} className='cursor-pointer' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
