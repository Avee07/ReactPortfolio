import React from 'react'
import ProjectItem from './ProjectItem'
import Movie from '../assets/Movie.png'
import Notes from '../assets/Notes.png'
import Photo from '../assets/Photo.png'
import ECom from '../assets/E-Commerce.png'

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1440px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>topic serious base toy loss president since seldom theory bit location donkey suppose enough knife move funny pitch wind business near highest kill best</p>
    <div className='max-w-[70%] m-auto grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={Movie} title = 'Movie'  />
        <ProjectItem img={Notes} title = 'Notes'  />
        <ProjectItem img={Photo} title = 'Photo'  />
        <ProjectItem img={ECom} title = 'Ecom'  />

    </div>
    </div>
  )
}

export default Projects