import { motion } from 'framer-motion';
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
                className={`p-8 rounded-2xl ${method.color} transition-all duration-300 hover:translate-x-4`}
              >
                <div className="text-[#d20ac3] mb-4">{method.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">{method.info}</p>
              </motion.div>
            ))}

            {/* Social Links */}
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

          {/* Contact Form */}
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

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d20ac3]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default ContactUs;