import Image from 'next/image';
import projects from '@/stuff/projects';
const sanitize= (str:string)=>str.toLowerCase().trim().replaceAll(' ','')
export default function Home({params:{id}}:any) {
  console.log(id)
const project=projects.find(({name:pid})=>{
  const ids={ 
    this:sanitize(id), that:sanitize(pid)
  }
  console.log(ids)
 return ids.that===ids.this
}) as any;
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
        <div className="flex md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="image-gallery">
              {project.images.map((img:any, imgIndex:number) => (
                <div key={`img-${imgIndex}`} className="mb-10">
                  <Image src={img} height={3000} width={1000} alt={`Image ${imgIndex}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block w-1/2 p-4 fixed top-100 right-0 h-full overflow-y-auto bg-cream">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.type}</p>
            <p>{project.size}</p>
            <p>{project.location}</p>
            <p>{project.status}</p>
            <div className="mt-11">
              <Image src="/projects/PLAN+OTOTO.png" height={100} width={200} alt="plan" />
            </div>
          </div>
        </div>
    </main>
  );
}
