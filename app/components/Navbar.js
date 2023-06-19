import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">Logo
            </Link>
          </div>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact"
                 className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md">Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
