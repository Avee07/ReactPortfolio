import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome,AiOutlineProject,AiOutlineMail} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

const Sidenav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    console.log('State Changed')
  };

  return (
    <div>
      <AiOutlineMenu onClick ={handleNav} className = 'absolute top-4 right-4 z-[99] md:hidden' />
      {
        nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'> 
              <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110'>
                <AiOutlineHome size={20} />
                <span className="pl-4">Home</span>
              </a>
              <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110'>
                <GrProjects size={20} />
                <span className="pl-4">Work</span>
              </a>
              <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110'>
                <AiOutlineProject size={20} />
                <span className="pl-4">Projects</span>
              </a>
              <a href="#person" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110'>
                <BsPerson size={20} />
                <span className="pl-4">Resume</span>
              </a>
              <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110'>
                <AiOutlineMail size={20} />
                <span className="pl-4">Contact</span>
              </a>
            </div>
        )
        :
        (
          <div>
            
          </div>
        )
      }
      <div className='md:block hidden fixed top-[25%] z-10 '> 
        <div className='flex flex-col'>
          <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineHome size={20} />
          </a>
          <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <GrProjects size={20} />
          </a>
          <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineProject size={20} />
          </a>
          <a href="#person" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsPerson size={20} />
          </a>
          <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sidenav