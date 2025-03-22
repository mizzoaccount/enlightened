{/*import Image from 'next/image';
import { ArrowRight } from 'react-feather';

const Projects = () => {
  const projects = [
    {
      bgColor: 'bg-[#f8f5fb]',
      tagColor: 'text-[#a07cc5]',
      tag: 'Web Design',
      title: 'Snowlake Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-1.png',
      imageSize: { width: 650, height: 370 },
      reverse: false
    },
    {
      bgColor: 'bg-[#f1f5fd]',
      tagColor: 'text-[#3f78e0]',
      tag: 'Mobile Design',
      title: 'Budget App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-2.png',
      imageSize: { width: 600, height: 367 },
      reverse: true
    },
    {
      bgColor: 'bg-[#f5faf7]',
      tagColor: 'text-[#7cb798]',
      tag: 'Web Design',
      title: 'Missio Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.',
      image: '/assets/images/project-3.png',
      imageSize: { width: 600, height: 367 },
      reverse: false
    },
    {
      bgColor: 'bg-[#fcf4f6]',
      tagColor: 'text-[#d16b86]',
      tag: 'Mobile Design',
      title: 'Storage App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.',
      image: '/assets/images/project-4.png',
      imageSize: { width: 620, height: 370 },
      reverse: true
    }
  ];

  return (
    <section className="py-20 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Title Section *
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
            <p className="text-gray-600">Check out some of my latest projects with creative ideas.</p>
          </div>
          <a 
            href="#" 
            className="px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            See All Projects
          </a>
        </div>

        {/* Projects Grid *
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`${project.bgColor} rounded-xl flex flex-col ${
                project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Content *
              <div className="p-6 md:p-8 md:w-1/2">
                <span className={`${project.tagColor} font-bold text-sm uppercase`}>
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold my-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.text}</p>
                <a 
                  href="#" 
                  className={`${project.tagColor} font-bold flex items-center gap-2 hover:gap-4 transition-all`}
                >
                  <span>See Project</span>
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Image *
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.tag}
                  width={project.imageSize.width}
                  height={project.imageSize.height}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;*/}

/*import Image from 'next/image';
import { ArrowRight } from 'react-feather';

const Projects = () => {
  const projects = [
    {
      bgColor: 'bg-[#f8f5fb]',
      tagColor: 'text-[#a07cc5]',
      tag: 'Web Design',
      title: 'Snowlake Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-1.png',
      imageSize: { width: 650, height: 370 },
      reverse: false
    },
    {
      bgColor: 'bg-[#f1f5fd]',
      tagColor: 'text-[#3f78e0]',
      tag: 'Mobile Design',
      title: 'Budget App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-2.png',
      imageSize: { width: 600, height: 367 },
      reverse: true
    },
    {
      bgColor: 'bg-[#f5faf7]',
      tagColor: 'text-[#7cb798]',
      tag: 'Web Design',
      title: 'Missio Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.',
      image: '/assets/images/project-3.png',
      imageSize: { width: 600, height: 367 },
      stacked: true // New flag to style differently
    },
    {
      bgColor: 'bg-[#fcf4f6]',
      tagColor: 'text-[#d16b86]',
      tag: 'Mobile Design',
      title: 'Storage App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.',
      image: '/assets/images/project-4.png',
      imageSize: { width: 620, height: 370 },
      stacked: true // New flag to style differently
    }
  ];

  return (
    <section className="py-20 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Title Section *
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Latest Projects</h2>
            <p className="text-gray-600">Check out some of my latest projects with creative ideas.</p>
          </div>
          <a 
            href="#" 
            className="px-6 py-3 border-2 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
          >
            See All Projects
          </a>
        </div>

        {/* Projects Grid *
        <div className="space-y-8">
          {/* First Two Projects - Normal Layout *
          {projects.slice(0, 2).map((project, index) => (
            <div 
              key={index}
              className={`${project.bgColor} rounded-xl flex flex-col ${
                project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Content *
              <div className="p-6 md:p-8 md:w-1/2">
                <span className={`${project.tagColor} font-bold text-sm uppercase`}>
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold my-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.text}</p>
                <a 
                  href="#" 
                  className={`${project.tagColor} font-bold flex items-center gap-2 hover:gap-4 transition-all`}
                >
                  <span>See Project</span>
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* Image *
              <div className="md:w-1/2">
                <Image
                  src={project.image}
                  alt={project.tag}
                  width={project.imageSize.width}
                  height={project.imageSize.height}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}

          {/* Last Two Projects - Side-by-Side Layout *
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(2, 4).map((project, index) => (
              <div 
                key={index}
                className={`${project.bgColor} rounded-xl flex flex-col p-6 md:p-8`}
              >
                {/* Content at the top *
                <div className="text-center">
                  <span className={`${project.tagColor} font-bold text-sm uppercase`}>
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold my-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.text}</p>
                  <a 
                    href="#" 
                    className={`${project.tagColor} font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all`}
                  >
                    <span>See Project</span>
                    <ArrowRight size={20} />
                  </a>
                </div>

                {/* Image at the bottom *
                <div className="mt-6">
                  <Image
                    src={project.image}
                    alt={project.tag}
                    width={project.imageSize.width}
                    height={project.imageSize.height}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;*/

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';

const Projects = () => {
  const projects = [
    {
      bgColor: 'bg-[#f8f5fb]',
      tagColor: 'text-[#a07cc5]',
      tag: 'Web Design',
      title: 'Snowlake Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-1.png',
      imageSize: { width: 650, height: 370 },
      reverse: false
    },
    {
      bgColor: 'bg-[#f1f5fd]',
      tagColor: 'text-[#3f78e0]',
      tag: 'Mobile Design',
      title: 'Budget App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.',
      image: '/assets/images/project-2.png',
      imageSize: { width: 600, height: 367 },
      reverse: true
    },
    {
      bgColor: 'bg-[#f5faf7]',
      tagColor: 'text-[#7cb798]',
      tag: 'Web Design',
      title: 'Missio Theme',
      text: 'Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque id ligula felis.',
      image: '/assets/images/project-3.png',
      imageSize: { width: 600, height: 367 },
      stacked: true // New flag to style differently
    },
    {
      bgColor: 'bg-[#fcf4f6]',
      tagColor: 'text-[#d16b86]',
      tag: 'Mobile Design',
      title: 'Storage App',
      text: 'Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper.',
      image: '/assets/images/project-4.png',
      imageSize: { width: 620, height: 370 },
      stacked: true // New flag to style differently
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const hoverEffect = {
    scale: 1.02,
    transition: { duration: 0.3 }
  };

  return (
    <section className="py-20 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Latest Projects</h2>
            <p className="text-gray-600">Check out some of my latest projects with creative ideas.</p>
          </div>
          <motion.a 
            href="#" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-900 to-[#d20ac3] text-white hover:from-[#d20ac3] hover:to-blue-900 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See All Projects
          </motion.a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`${project.bgColor} rounded-xl flex flex-col ${
                project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
              } group relative overflow-hidden`}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d20ac3] rounded-xl transition-all duration-300" />

              {/* Content */}
              <motion.div 
                className="p-6 md:p-8 md:w-1/2"
                initial={{ opacity: 0, x: project.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-blue-900 font-bold text-sm uppercase">
                  {project.tag}
                </span>
                <h3 className="text-2xl font-bold my-4 text-blue-900">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.text}</p>
                <motion.a 
                  href="#" 
                  className="text-[#d20ac3] font-bold flex items-center gap-2 hover:gap-4 transition-all"
                  whileHover={{ x: 5 }}
                >
                  <span>See Project</span>
                  <ArrowRight size={20} className="inline-block" />
                </motion.a>
              </motion.div>

              {/* Image */}
              <motion.div 
                className="md:w-1/2 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image}
                  alt={project.tag}
                  width={project.imageSize.width}
                  height={project.imageSize.height}
                  className="w-full h-auto object-cover transform origin-center"
                />
              </motion.div>
            </motion.div>
          ))}

          {/* Stacked Projects */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {projects.slice(2, 4).map((project, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`${project.bgColor} rounded-xl flex flex-col p-6 md:p-8 relative group`}
                whileHover={{ y: -10 }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d20ac3]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="text-center z-10">
                  <span className="text-blue-900 font-bold text-sm uppercase">
                    {project.tag}
                  </span>
                  <h3 className="text-2xl font-bold my-4 text-blue-900">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.text}</p>
                  <motion.a 
                    href="#" 
                    className="text-[#d20ac3] font-bold flex items-center justify-center gap-2 hover:gap-4 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <span>See Project</span>
                    <ArrowRight size={20} className="inline-block" />
                  </motion.a>
                </div>

                {/* Image */}
                <motion.div 
                  className="mt-6 overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.03 }}
                >
                  <Image
                    src={project.image}
                    alt={project.tag}
                    width={project.imageSize.width}
                    height={project.imageSize.height}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;