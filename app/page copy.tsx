import Image from 'next/image';
import projects from '@/stuff/projects';

export default async function Home() {
  console.log(projects);

  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      {projects.map((project, index) => (
        <div key={`project-${index}`} className="flex md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="image-gallery">
              {project.images.map((img, imgIndex) => (
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
              <Image src="/projects/ad 03 plan.png" height={100} width={200} alt="plan" />
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
