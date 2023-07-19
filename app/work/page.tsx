"use client"
import ProjectItem from '@/components/ProjectItem'
import Image from 'next/image'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {IoChevronBackCircleOutline} from 'react-icons/io5'
import {BiWorld} from 'react-icons/bi'
import {AiFillGithub, AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import LogoImg from '../../public/yvesDaVinci.png'
import pro from '../../public/yvesDaVinci2.png'
import Link from 'next/link'
import projects from '../../utils/data'
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
  const [Projects,setProjects]= useState(projects)
  const [Project,setProject] = useState({ title: '',subtitle : "",preview : "" ,description : "", technologies : [], openLink : "", githubLink : ""})
  interface Type {
    id: number;
    title: string;
  }
  
  
  
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
   const [Navshow,setNavShow] = useState(false)
  const Toggle = () => { 
    setNavShow(!Navshow)
   }
   useEffect(()=>{
     if(selectedId === 0){
      setProjects(projects)
     }else{
      const newProjects = projects.filter(p => p.projectType === selectedId)
      setProjects(newProjects)
     }
   },[selectedId])
  return (
    <div className={` ${show ?"h-screen" : "h-auto"} px-3 overflow-hidden  relative flex flex-col items-center `}>
        <nav className='h-[5rem] bg-blue-500 w-full mt-3 flex rounded-lg flex-row justify-between items-center px-4'>
          <Link href="/">
     <Image  height={120} width={175} src={LogoImg} alt='yveslioneldiomande' />

          </Link>

       <div onClick={()=> Toggle()} className={`items-center z-50 h-10 w-10 cursor-pointer rounded-full flex justify-center border-2 border-${show ? "black" : "white"}`} >
      
      { Navshow ? <AiOutlineClose size={20} color='black'/> : <AiOutlineMenu size={20} color='white'/>}
      
       </div>
     </nav>
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
  <p className='text-2xl mt-3 text-black font-semibold ' >{Project ? Project?.title : "Tiktok"}</p>
  {/* First Description */}
  <p className=' text-gray-400 text-sm ' >{Project ? Project?.subtitle : "designer positioned behind an Illustrator artboard adjusting pixels, but I design."}</p>
  {/* Image */}
  <div className='h-[22rem] mt-3 rounded-lg  '>
    <Image src={Project ? Project?.preview :pro} alt='projet'   className='h-[22rem] object-contain rounded-lg' />
    </div>
    {/* A propos */}
  <p className=' text-black font-semibold mt-3 ' >A propos du projet</p>
  <p className=' text-gray-400 mt-2 text-sm ' >{Project ? Project?.description : "Piggment is a curated collection of amazingly colored gradients for designers, developers, and smart creators over the world. now you can generate, explore, save, easy CSS cross-browser gradient codes all in one place."}</p>
{/* TechNology */}
<p className=' text-black font-semibold mt-3 ' >Technologies</p>
<div className='flex flex-row items-center mt-4 gap-1 flex-wrap h-auto' >
  {Project ? Project.technologies.map((tech,index)=> (<div key={index} className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>{tech}</p>
      </div>)) : <>
      
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>Nodejs</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>Firebase</p>
      </div>
      <div className='h-[2.4rem] min-w-[4rem] p-3 bg-[#EFE9E4] items-center  justify-center flex rounded-lg' >
        <p className='text-black font-semibold'>React native Elements</p>
      </div>
      </>}
    </div>
    {/* Website */}
    <div className='flex mt-3 gap-x-1 flex-row items-center'>
      <BiWorld />
<p className=' text-black font-semibold  ' >Website</p>

    </div>
<Link className=' text-black my-2 font-semibold text-sm  ' target="_blank" href={Project ? Project.openLink :"https://piggment.co"}  >{Project ? Project.openLink :"https://piggment.co"}</Link>
    {/* Github */}
    <div className='flex mt-3 gap-x-1 flex-row items-center'>
      <AiFillGithub />
<p className=' text-black font-semibold  ' >Github</p>

    </div>
<a className=' text-black my-2 font-semibold text-sm  '  >{Project ?Project.githubLink :"https://github.com/adenekan41/piggment"}</a>

</div>
{/* Porject Button */}
<Link target="_blank" href={Project ? Project.openLink :"https://piggment.co"} className='h-[4rem] bg-blue-500 gap-x-4 hover:bg-blue-600 cursor-pointer flex justify-center items-center' >
  <p className='text-lg text-white font' >Ouvrir le projet</p>
  <HiOutlineExternalLink size={24} color='white' />
</Link>

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
        { Projects.map((project,index) => (<ProjectItem setProject={setProject} project={project} key={index} setShow={DisplayDrawer}/>))}
        
       
        
      </div>
    </div>
  )
}

export default Page