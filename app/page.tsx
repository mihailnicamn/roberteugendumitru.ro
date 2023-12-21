import Image from 'next/image';
import projects from '@/stuff/projects';
const sanitize= (str:string)=>str.toLowerCase().trim().replaceAll(' ','')

export default async function Home() {
  console.log(projects);

  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-[#bcada3]">
      {projects.map((project, index) => (
        <div key={`project-${index}`} className="flex md:flex-row">
         
          <div className="hidden md:block w-1/2 p-4 right-0 h-full overflow-y-auto ">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.type}</p>
            <p>{project.size}</p>
            <p>{project.location}</p>
            <p>{project.status}</p>
            <a href={`/${sanitize(project.name)}`}>project.name</a>
            <div className="mt-11">
              <Image src="/projects/PLAN+OTOTO.png" height={100} width={200} alt="plan" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
