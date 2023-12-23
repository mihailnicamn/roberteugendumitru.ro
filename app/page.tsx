'use client'
import Image from 'next/image';
import Link from 'next/link';
import projects from '@/stuff/projects';
import React from 'react';

const sanitize = (str: string) => str.toLowerCase().trim().replaceAll(' ', '');
const Project=(props:any)=> { 
  const [visible,setVisible] = React.useState(false)
  const project= props.project
  const index=props.index
  return(<>
<div className='m-2' onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>
  <Link href={`/${sanitize(project.name)}`}>          
  <div style={{ cursor: 'pointer' }}>
    <div className={`mb-10 `}>
      <div className= 'image-overlay'/>
      <Image className='_img' src={project.images[0]} height={300} width={400} alt={`Image ${index}`} />
    </div>
    <h2 className={`${visible ?'fade-in':'fade-out'} h-[10px] mt-[-30px] opacity-[0]`}>{project.name}</h2>
    {/* {visible ? (<h2 className='fade-in h-[10px] mt-[-30px]'>{project.name}</h2>):(<div className='h-[10px] mt-[-30px]'></div>)}   */}
  </div>        
</Link>
</div>
</>)
}
export default function Home() {
  const projectsPerPage = 3;
  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-[#e4e1dd] text-black">
      <div className="grid grid-cols-4 md:grid-cols-4 gap-8 w-full">
        {projects.map((project, index) => (
            <Project key={`project-${index}`} index={index}
            project ={project}>              
            </Project>         
        ))}
      </div>
    </main>
  );
}
//