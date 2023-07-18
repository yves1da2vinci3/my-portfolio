"use client"
import ProjectItem from '@/components/ProjectItem'
import Image from 'next/image'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import {BiWorld} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import pro from '../../public/yvesDaVinci (1).png'
function Page() {
  const types = [
    {
    id : 0,
    title : "Tout"
  },
    {
    id : 1,
    title : "Web"
  },
    {
    id : 2,
    title : "Mobile"
  },
    {
    id : 3,
    title : "UI/Ux"
  },
    {
    id : 4,
    title : "Autre"
  },
]
  const [selectedId,setSelectedId] = useState(0)
  const [show,setShow] = useState(false)
  const [animtation,setAnimtation] = useState(false)
  useEffect(()=>{
    if(show){
      setTimeout(()=>{
        setAnimtation(true)
      },10)
    }else{
      setAnimtation(false)
    }

  },[show])

  const DisplayDrawer = () => { 
    setShow(true)
    setTimeout(()=>{
      setAnimtation(true)
    },100)
   }
  return (
    <div className={` ${show ?"h-screen" : "h-auto"} overflow-hidden  relative flex flex-col items-center `}>
      {/* Drawer  */}
      <div className={` ${show ?"absolute" : "hidden"} absolute  h-screen  bg-black w-full z-50 bg-opacity-80 flex justify-end`} >
        {/* Project Box */}
        <div className={`${animtation ?"translate-x-[0rem]" : "translate-x-[120rem]"} h-full transition duration-[400ms] ease-in-out delay-[10ms] flex bg-[#FFFDFC] w-[100%] md:w-[30%] flex-col`}>

{/* Project Inofr */}
<div className={`flex-1   overflow-y-scroll p-3 `} >
  {/* Pet */}
  <div className='flex items-center px-4 border-b-gray-300 border-b-2 justify-between h-[3rem] ' >
    <IoChevronBackCircleOutline onClick={()=> setShow(false)} size={30} className='cursor-pointer'  color='gray' />
  <p className='text-md font-semibold text-black font-' >Retour aux projets</p>

  </div>
  {/* Title */}
  <p className='text-2xl mt-3 text-black font-semibold ' >Tiktok Clone</p>
  {/* First Description */}
  <p className=' text-gray-400 text-sm ' >designer positioned behind an Illustrator artboard adjusting pixels, but I design.</p>
  {/* Image */}
  <div className='h-[22rem] mt-3 rounded-lg bg-red-100 '>
    <Image src={pro} alt='projet' className='h-[22rem] rounded-lg' />
    </div>
    {/* A propos */}
  <p className=' text-black font-semibold mt-3 ' >A propos du projet</p>
  <p className=' text-gray-400 mt-2 text-sm ' >Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place.</p>
{/* TechNology */}
<p className=' text-black font-semibold mt-3 ' >Technologies</p>
<div className='flex flex-row items-center mt-4 gap-1 flex-wrap h-auto' >
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>React native</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>Nodejs</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>Firebase</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>React native Elements</p>
      </div>
    </div>
    {/* Website */}
    <div className='flex mt-3 gap-x-1 flex-row items-center'>
      <BiWorld />
<p className=' text-black font-semibold  ' >Website</p>

    </div>
<a className=' text-black my-2 font-semibold text-sm  '  >https://piggment.co</a>
    {/* Github */}
    <div className='flex mt-3 gap-x-1 flex-row items-center'>
      <AiFillGithub />
<p className=' text-black font-semibold  ' >Github</p>

    </div>
<a className=' text-black my-2 font-semibold text-sm  '  >https://github.com/adenekan41/piggment</a>

</div>
{/* Porject Button */}
<div className='h-[4rem] bg-blue-500 gap-x-4 hover:bg-blue-600 cursor-pointer flex justify-center items-center' >
  <p className='text-lg text-white font' >Ouvrir le projet</p>
  <HiOutlineExternalLink size={24} color='white' />
</div>

        </div>
      </div>
      {/* Main */}
      <h1 className='text-6xl mt-10 font-semibold'>Projets.</h1>
      <div className='flex-row overflow-x-scroll flex gap-x-6 mt-10 items-center'>
        {types.map(type=> (
          <div  onClick={()=> setSelectedId(type.id)} key={type.id} className={`cursor-pointer justify-center p-3 w-[3rem]  md:w-[6rem] transition duration-[500ms] ease-in  flex items-center h-[2.4rem] ${selectedId=== type.id ? "bg-black" : ""} rounded-lg`} ><p className={` text-[1rem] md:text-lg transition duration-[300ms] ease-in-out ${selectedId === type.id ? "text-white font-semibold text-2xl " : "text-gray-500 text-xl"}`} > {type.title}</p></div>
        ))}
      </div>
      <div className='w-full md:w-[52rem] flex md:flex-row flex-col items-center flex-wrap justify-center md:justify-between pb-4  mt-8 h-auto gap-4 '>
        
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        <ProjectItem setShow={DisplayDrawer}/>
        
      </div>
    </div>
  )
}

export default Page