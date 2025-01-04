
const Footer = () => {
    return (
        <footer className="bg-neutral py-6 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            {/* Social Media Links */}
            <a href="https://github.com/mohammaduzzal" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl hover:text-primary transition-all"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohammad-uzzal-289a24283/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl hover:text-primary transition-all"></i>
            </a>
            <a href="https://x.com/bright0001011" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl hover:text-primary transition-all"></i>
            </a>
          </div>
  
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Uzzal. All rights reserved. | Designed with <i class="text-red-600 fa-solid fa-heart"></i> in Bangladesh.
          </p>
        </div>
      </footer>
    );
};

export default Footer;