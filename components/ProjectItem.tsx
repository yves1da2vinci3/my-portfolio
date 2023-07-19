import Image from 'next/image'
import React, { FC } from 'react'
import pro from '../public/yvesDaVinci2.png'
interface ProjectItemProp {
    project : any,
    setShow  : Function,
    setProject : Function
   
  }

  

function ProjectItem({ setShow ,project,setProject}: ProjectItemProp): JSX.Element {
    const setElement = () => { 
        setProject(project)
        setShow()
       }
  return (
    <div onClick={()=> setElement() } className='w-[23rem] md:w-[25rem] relative h-[20rem] group cursor-pointer rounded-lg overflow-hidden ' >
    {/* Image */}
    <div className='absolute h-[20rem] flex-1'>
    <Image src={project.preview} alt='projet' className='z-20 flex justify-center  object-cover h-full  ' />
    </div>
    {/* Informations */}
   <div className='w-full  absolute  h-full z-30 transition duration-[700ms] ease-in-out delay-[100ms] p-4  group-hover:translate-y-[0rem] rounded-lg bg-black bg-opacity-30 translate-y-[20rem] flex flex-col gap-y-4 justify-end' >
    <p className='text-3xl text-white font-semibold ' >{project.title}</p>
    <p className=' text-white ' >{project.subtitle}</p>
    <div className='flex flex-row items-center gap-1 flex-wrap h-auto' > { project.technologies.map((tech :string,index:number)=> ( <div key={index} className='h-[2.4rem] min-w-[4rem] p-3 bg-[#3F3D3A] items-center  justify-center flex rounded-full' >
        <p className='text-white'>{tech}</p>
      </div>)) }
       
     
     
      
      
    </div>
   </div>

   </div>
  )
}

export default ProjectItem