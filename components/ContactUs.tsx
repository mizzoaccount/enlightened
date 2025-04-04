{/*import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, RocketLaunch } from 'phosphor-react';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone size={32} />,
      title: "Let's Talk",
      info: '+1 (555) 123-4567',
      color: 'bg-[#d20ac3]/10'
    },
    {
      icon: <Envelope size={32} />,
      title: "Digital Beacon",
      info: 'connect@enlightenedhub.com',
      color: 'bg-blue-900/10'
    },
    {
      icon: <MapPin size={32} />,
      title: "Innovation Nexus",
      info: 'Silicon Valley, CA 94088',
      color: 'bg-[#d20ac3]/10'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Ignite Your Future Journey
            <span className="block w-24 h-2 bg-[#d20ac3] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with our innovation architects to shape tomorrow's solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods *
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-2xl ${method.color} transition-all duration-300 hover:translate-x-4`}
              >
                <div className="text-[#d20ac3] mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.info}</p>
              </motion.div>
            ))}

            {/* Social Links *
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-12 pl-8"
            >
              {['LinkedIn', 'Twitter', 'Facebook'].map((platform, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="text-blue-900 hover:text-[#d20ac3] transition-colors"
                >
                  {platform}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form *
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-2xl shadow-2xl"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-blue-900 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-4 rounded-xl border-2 border-blue-900/10 focus:border-[#d20ac3] focus:ring-0 transition-all"
                />
              </div>

              <div>
                <label className="block text-blue-900 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full p-4 rounded-xl border-2 border-blue-900/10 focus:border-[#d20ac3] focus:ring-0 transition-all"
                />
              </div>

              <div>
                <label className="block text-blue-900 mb-2">Your Vision</label>
                <textarea
                  rows={4}
                  className="w-full p-4 rounded-xl border-2 border-blue-900/10 focus:border-[#d20ac3] focus:ring-0 transition-all"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#d20ac3] text-white py-4 px-8 rounded-xl font-bold transition-all hover:bg-blue-900"
              >
                <RocketLaunch size={24} className="inline mr-2" />
                Launch Collaboration
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Decorative Elements *
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d20ac3]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ContactUs;*/}

import { motion } from 'framer-motion';
import { Envelope, Phone, MapPin, RocketLaunch, LinkedinLogo, TwitterLogo, FacebookLogo } from 'phosphor-react';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone weight="duotone" size={40} />,
      title: "Let's Talk",
      info: '+254 112 265344',
      color: 'bg-gradient-to-br from-[#d20ac3]/5 to-[#d20ac3]/15'
    },
    {
      icon: <Envelope weight="duotone" size={40} />,
      title: "Digital Beacon",
      info: 'futurecreativehub@gmail.com',
      color: 'bg-gradient-to-br from-blue-900/5 to-blue-900/15'
    },
    {
      icon: <MapPin weight="duotone" size={40} />,
      title: "Innovation Nexus",
      info: 'Garden Estate NBO-Kenya',
      color: 'bg-gradient-to-br from-[#d20ac3]/5 to-[#d20ac3]/15'
    }
  ];

  const socialPlatforms = [
    { icon: <LinkedinLogo size={24} />, name: 'LinkedIn', color: 'text-[#0077b5]' },
    { icon: <TwitterLogo size={24} />, name: 'Twitter', color: 'text-[#1DA1F2]' },
    { icon: <FacebookLogo size={24} />, name: 'Facebook', color: 'text-[#1877F2]' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
       {/*} <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Ignite Your Future Journey
            </span>
            <motion.span 
              className="block w-24 h-1.5 bg-gradient-to-r from-[#d20ac3] to-[#efa110] mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-blue-900/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Connect with our innovation architects to shape tomorrow's digital landscape today
          </motion.p>
        </motion.div>*/}

        
<motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6 }}
                          className="text-center mb-16"
                        >
                          <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                            Ignite Your Future Journey
                            </span>
                            <motion.span 
                              className="absolute left-0 bottom-[-6px] w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                            />
                          </motion.h2>
                          <motion.p 
                            className="text-lg md:text-xl text-blue-900/90 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                          >
                              Connect with our innovation architects to shape tomorrow's digital landscape today
                             </motion.p>
                          
                        </motion.div>


        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className={`p-8 rounded-2xl ${method.color} transition-all duration-300 hover:shadow-lg border border-gray-100`}
              >
                <div className="text-[#d20ac3] mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-lg">{method.info}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 mt-12 pl-8"
            >
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`${platform.color} hover:opacity-80 transition-all flex items-center gap-2`}
                >
                  {platform.icon}
                  <span>{platform.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-blue-900 mb-3 font-medium text-lg">Your Name</label>
                <input
                  type="text"
                  className="w-full p-5 rounded-xl border-2 border-gray-200 focus:border-[#d20ac3] focus:ring-0 transition-all text-lg"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-blue-900 mb-3 font-medium text-lg">Your Email</label>
                <input
                  type="email"
                  className="w-full p-5 rounded-xl border-2 border-gray-200 focus:border-[#d20ac3] focus:ring-0 transition-all text-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-blue-900 mb-3 font-medium text-lg">Your Vision</label>
                <textarea
                  rows={5}
                  className="w-full p-5 rounded-xl border-2 border-gray-200 focus:border-[#d20ac3] focus:ring-0 transition-all text-lg"
                  placeholder="Describe your project or inquiry"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(210, 10, 195, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-[#d20ac3] to-blue-900 text-white py-5 px-8 rounded-xl font-bold text-lg transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <RocketLaunch weight="duotone" size={24} />
                  Launch Collaboration
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-[#d20ac3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;