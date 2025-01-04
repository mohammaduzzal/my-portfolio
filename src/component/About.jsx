import { motion } from 'framer-motion';
const About = () => {
    return (
        <motion.section
        id="about"
        className="py-16 bg-base-100 text-neutral"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-Montserrat font-bold text-primary text-center"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-neutral leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
              Hi! I'm <strong>Uzzal</strong>, a passionate <strong>frontend web developer</strong> with a unique journey. Though my academic background is in <strong>Political Science</strong> from the <strong>National University</strong>, my curiosity and interest in <strong>technology</strong> led me to the world of web development. I believe technology has the power to shape the future, and this thought inspires me every day to learn and grow in the field of web development.
             
          </motion.p>
        
          <motion.p
            className="mt-4 text-lg text-neutral leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
              When I'm not coding, you'll find me exploring new places, traveling, and embracing different cultures. Traveling not only broadens my perspective but also fuels my creativity and problem-solving skills. Exploring the world gives me fresh ideas and inspiration, which I bring to my work.
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-neutral leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
             In addition to web development, I have a passion for learning new things, whether it's through books or hands-on experiences. I believe that constant learning is the key to growth, both personally and professionally.
          </motion.p>
          <motion.p
            className="mt-4 text-lg text-neutral leading-relaxed text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
             I'm always open to new challenges and collaboration, and I look forward to the opportunities that come my way.
          </motion.p>
        </div>
      </motion.section>
    );
};

export default About;