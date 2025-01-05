import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-Montserrat font-bold">
            <a href="#home">My Portfolio</a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to='/' className="hover:text-secondary">Home</Link>
            <a href="#about" className="hover:text-secondary">About</a>
            <a href="#projects" className="hover:text-secondary">Projects</a>
            <a href="#skills" className="hover:text-secondary">Skills</a>
            <a href="#contact" className="hover:text-secondary">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;