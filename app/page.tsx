import Image from 'next/image';
import Link from 'next/link';
import projects from '@/stuff/projects';

const sanitize = (str: string) => str.toLowerCase().trim().replaceAll(' ', '');

export default function Home() {
  const projectsPerPage = 3;

  return (
    <main className="flex min-h-screen items-center justify-between p-24 bg-[#bcada3]">
      {projects.map((project, index) => (
        <div key={`project-${index}`} className={`w-full md:w-1/3 mb-8 ${index % projectsPerPage === 2 ? 'md:mb-0' : ''}`}>
          <Link href={`/${sanitize(project.name)}`}>
            <div style={{ cursor: 'pointer' }}>
              <div className="mb-10">
                <Image src={project.images[0]} height={300} width={400} alt={`Image ${index}`} />
              </div>
              <h2>{project.name}</h2>
            </div>
          </Link>
        </div>
      ))}
    </main>
  );
}
