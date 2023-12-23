import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-white text-xl font-bold">Robert-Eugen Dumitru</a>
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/projects">
            <a className="text-white">Projects</a>
          </Link>
          <Link href="/about">
            <a className="text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-white">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
