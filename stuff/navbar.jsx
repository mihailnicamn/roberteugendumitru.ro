import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="bg-[#e4e1dd] text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link className="text-xl font-bold" href="/">            
          Robert-Eugen Dumitru
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <div className='mx-2'>
            <Link href="/projects">
           Projects
          </Link></div>       
          <div className='mx-2'>
          <Link href="/about">
            About            
          </Link>
          </div>
          <div className='mx-2'>
          <Link href="/contact">
            Contact
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
