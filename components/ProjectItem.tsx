import Image from 'next/image'
import React, { FC } from 'react'
import pro from '../public/yvesDaVinci (1).png'
interface ProjectItemProp {
    
    setShow  : Function,
   
  }


function ProjectItem({ setShow }: ProjectItemProp): JSX.Element {
  return (
    <div onClick={()=> setShow()} className='w-[25rem] relative h-[20rem] group cursor-pointer rounded-lg overflow-hidden ' >
    {/* Image */}
    <div className='absolute flex-1'>
    <Image src={pro} alt='projet' className='z-40' />
    </div>
    {/* Informations */}
   <div className='w-full  absolute  h-full z-50 transition duration-[700ms] ease-in-out delay-[100ms] p-4  group-hover:translate-y-[0rem] rounded-lg bg-black bg-opacity-30 translate-y-[20rem] flex flex-col gap-y-4 justify-end' >
    <p className='text-3xl text-white font-semibold ' >Tiktok Clone</p>
    <p className=' text-white ' >designer positioned behind an Illustrator artboard adjusting pixels, but I design.</p>
    <div className='flex flex-row items-center gap-1 flex-wrap h-auto' >
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#3F3D3A] items-center  justify-center flex rounded-full' >
        <p className='text-white'>React native</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#3F3D3A] items-center  justify-center flex rounded-full' >
        <p className='text-white'>Nodejs</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#3F3D3A] items-center  justify-center flex rounded-full' >
        <p className='text-white'>Firebase</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#3F3D3A] items-center  justify-center flex rounded-full' >
        <p className='text-white'>React native Elements</p>
      </div>
    </div>
   </div>

   </div>
  )
}

export default ProjectItem