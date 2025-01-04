import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <section id="banner" className="bg-base-100 text-neutral py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Profile Image with Animation */}
          <motion.div
            className="w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full shadow-lg mb-6 md:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src='/img.jpg'
              alt="Uzzal"
              className="w-full h-full object-cover"
            />
          </motion.div>
  
          {/* Hero Text with Animation */}
          <div className="md:ml-8 text-center md:text-left">
            <motion.h1
              className="text-3xl md:text-5xl font-Montserrat font-bold text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Mohammad Uzzal
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl font-Roboto text-secondary mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Frontend Developer 
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-neutral"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              I am a passionate Frontend Developer skilled in creating modern, responsive, and user-friendly web applications using React, Tailwind CSS, and other technologies.
            </motion.p>
  
            {/* Social Links */}
            <motion.div
              className="mt-6 flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <a
                href="https://github.com/mohammaduzzal" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary transition duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-uzzal-289a24283/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary transition duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://x.com/bright0001011" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://www.facebook.com/brightfull.uzzal" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral hover:text-primary transition duration-300"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
            </motion.div>
  
            {/* Resume Download Button */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <a
                href="https://drive.google.com/drive/u/0/folders/1PjEMCo0nF_jme71WLeX7LGx1Tmi5gWyO"
                download
                className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-secondary transition duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default Banner;