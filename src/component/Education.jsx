import { motion } from 'framer-motion';
const Education = () => {
    return (
        <section id="education" className="py-16 bg-base-100 text-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-Montserrat font-bold text-primary text-center"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Education
          </motion.h2>
  
          <div className="mt-8 space-y-8">
            {/* Graduation */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-primary">Graduation</h3>
              <p className="text-lg text-neutral mt-2">National University, Bangladesh</p>
              <p className="text-md text-neutral mt-2">Bachelor's in Political Science, 2023</p>
            </motion.div>
  
            {/* Post Graduation */}
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-primary">Post Graduation</h3>
              <p className="text-lg text-neutral mt-2">National University, Bangladesh</p>
              <p className="text-md text-neutral mt-2">Master's in Political Science (In Progress)</p>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default Education;