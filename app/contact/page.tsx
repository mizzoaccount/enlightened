"use client";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaQuestionCircle } from "react-icons/fa";
import Header from "@/components/HeadNavigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";



export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We specialize in web design, media production, and IT solutions including custom software development, UX/UI design, and digital strategy consulting."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope, but most websites take 4-8 weeks from concept to launch. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What's your pricing structure?",
      answer: "We offer both project-based pricing and retainer models, depending on your needs. All projects begin with a free discovery session to determine scope and budget."
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We've worked with clients across North America, Europe, and Asia. Our team is distributed across multiple time zones to accommodate global clients."
    }
  ];

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-[#d20ac3] text-2xl" />,
      title: "Visit Us",
      details: "Garden Estate NBO-Kenya",
      description: "Our headquarters in the heart of Garden Estate"
    },
    {
      icon: <FaPhone className="text-[#d20ac3] text-2xl" />,
      title: "Call Us",
      details: "+254 112 265344",
      description: "Mon-Fri, 9am-5pm PST"
    },
    {
      icon: <FaEnvelope className="text-[#d20ac3] text-2xl" />,
      title: "Email Us",
      details: "futurecreativehub@gmail.com",
      description: "Typically respond within 24 hours"
    },
    {
      icon: <FaClock className="text-[#d20ac3] text-2xl" />,
      title: "Hours",
      details: "Monday - Friday",
      description: "9:00 AM - 6:00 PM PST"
    }
  ];

  return (
    <div className="mt-12">
      <Header />
      <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-4 min-h-screen" id="contact">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Get In Touch
              <motion.span 
                className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              We'd love to hear about your project and discuss how we can help bring your vision to life.
            </motion.p>
          </motion.div>

          {/* Contact Content */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
              
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setActiveTab("general")}
                  className={`px-4 py-2 rounded-lg font-medium ${activeTab === "general" ? "bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  General Inquiry
                </button>
                <button
                  onClick={() => setActiveTab("project")}
                  className={`px-4 py-2 rounded-lg font-medium ${activeTab === "project" ? "bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white" : "bg-gray-100 text-gray-700"}`}
                >
                  Project Inquiry
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d20ac3]/50 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d20ac3]/50 focus:border-transparent"
                    placeholder="futurecreativehub@gmail.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d20ac3]/50 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d20ac3] to-[#efa110] hover:from-[#efa110] hover:to-[#d20ac3] text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info and FAQ */}
            <div className="space-y-12">
              {/* Contact Methods */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-[#d20ac3]/10 to-[#efa110]/10 rounded-lg">
                          {method.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900">{method.title}</h4>
                          <p className="text-gray-700 font-medium">{method.details}</p>
                          <p className="text-gray-500 text-sm mt-1">{method.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 overflow-hidden"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.538444119012!2d-122.4194159242664!3d37.7749294718608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </motion.div>

              {/* FAQ */}
            {/* FAQ */}
<motion.div variants={itemVariants}>
  <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
    <FaQuestionCircle className="text-[#d20ac3]" />
    Frequently Asked Questions
  </h3>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
        variants={itemVariants}
        whileHover={{ y: -2 }}
      >
        <button
          onClick={() => setActiveFaq(activeFaq === index ? null : index)}
          className="w-full text-left p-6 flex justify-between items-center"
        >
          <h4 className="text-lg font-bold text-gray-900">{faq.question}</h4>
          <motion.div
            animate={{ rotate: activeFaq === index ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#d20ac3]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {activeFaq === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.3 },
                  opacity: { duration: 0.2, delay: 0.1 }
                }
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.2 },
                  opacity: { duration: 0.1 }
                }
              }}
              className="px-6 overflow-hidden"
            >
              <div className="pb-6 text-gray-600">{faq.answer}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}