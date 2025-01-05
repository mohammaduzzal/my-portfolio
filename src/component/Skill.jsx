import { motion } from 'framer-motion';

import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/js.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/nodejs.png';
import mongoLogo from '../assets/mongo.png';

const Skill = () => {
    return (
        <section id="skills" className="py-16 bg-base-100 text-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-Montserrat font-bold text-primary text-center"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            My Skills
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Frontend Skills */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <img src={htmlLogo} alt="HTML" className="w-20 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-primary text-center">HTML</h3>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.8 }}
            >
              <img src={cssLogo} alt="CSS" className="w-20 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-primary text-center">CSS</h3>
            </motion.div>
  
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.9 }}
            >
              <img src={jsLogo} alt="JavaScript" className="w-20 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-primary text-center">JavaScript</h3>
            </motion.div>
  
            {/* Backend Skills */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.9 }}
            >
              <img src={reactLogo} alt="React" className="w-20 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-primary text-center">React</h3>
            </motion.div>
            
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 0.9 }}
            >
              <img src={nodeLogo} alt="Node.js" className="w-20 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-primary text-center">Node.js</h3>
            </motion.div>
  
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 2 }}
            >
              <img src={mongoLogo} alt="Express.js" className="w-20 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-primary text-center">Express.js</h3>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default Skill;