'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
      setErrors({});
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
  <section id="contact" className="w-full py-20 md:py-28 px-4 bg-[#f6f4ef]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="inline-block text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#6B3F2A] relative pb-3">
            Get In Touch
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#6B3F2A] rounded-full"></span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#6B3F2A]/70 max-w-2xl mx-auto leading-relaxed">
            Have a question or want to place a custom cake order? Reach out to us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Left: Contact Information - with beautiful cake bg image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-2xl shadow-xl overflow-hidden order-2 lg:order-1 min-h-125 lg:min-h-150"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.pexels.com/photos/6392782/pexels-photo-6392782.jpeg"
                alt="Elegant cake background"
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content on top */}
            <div className="relative z-10 p-8 md:p-10 text-white space-y-8 h-full flex flex-col">
              <motion.div variants={itemVariants}>
                <p className="text-xl font-serif text-white/95 mb-6">
                  Visit us in Dehradun or get in touch
                </p>
              </motion.div>

              {/* Address */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif font-bold text-white mb-1">Our Location</p>
                  <p className="text-white/90 leading-relaxed">
                    Bake Masters Bakery<br />
                    Near Clock Tower / Paltan Bazaar Area<br />
                    Dehradun, Uttarakhand 248001
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif font-bold text-white mb-1">Email</p>
                  <a href="mailto:info@bakemasters.co.in" className="text-white/90 hover:text-white transition-colors">
                    info@bakemasters.co.in
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-white/15 backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 3.742a1 1 0 01-.502 1.21l-2.257 1.13a15.042 15.042 0 005.142 5.142l1.13-2.257a1 1 0 011.21-.502l3.742 1.498A1 1 0 0121 12.72V19a2 2 0 01-2 2h-3a15 15 0 01-15-15V5z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-serif font-bold text-white mb-1">Phone</p>
                  <div className="text-white/90 space-y-1">
                    <a href="tel:+919068664222" className="hover:text-white transition-colors">+91 90686 64222</a>
                    <br />
                    <a href="tel:+911352717771" className="hover:text-white transition-colors">+91 135 271 7771</a>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={itemVariants} className="pt-6 mt-auto">
                <p className="font-serif font-bold text-white mb-4">Follow Us</p>
                <div className="flex gap-4">
                  {[
                    { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                    { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
                    { icon: <TwitterIcon />, label: 'Twitter', href: '#' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm transition-all duration-300"
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      whileTap={{ scale: 0.92 }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Contact Form - unchanged */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-md order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#6B3F2A] mb-2">Name *</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-5 py-3.5 rounded-xl bg-[#FBF4EE] border ${errors.name ? 'border-red-500' : 'border-[#6B3F2A]/20'} focus:outline-none focus:ring-2 focus:ring-[#6B3F2A]/40 transition-all`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#6B3F2A] mb-2">Email *</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-5 py-3.5 rounded-xl bg-[#FBF4EE] border ${errors.email ? 'border-red-500' : 'border-[#6B3F2A]/20'} focus:outline-none focus:ring-2 focus:ring-[#6B3F2A]/40 transition-all`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#6B3F2A] mb-2">Phone</label>
                <motion.input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full px-5 py-3.5 rounded-xl bg-[#FBF4EE] border border-[#6B3F2A]/20 focus:outline-none focus:ring-2 focus:ring-[#6B3F2A]/40 transition-all"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-[#6B3F2A] mb-2">Message *</label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your custom cake idea or any question..."
                  className={`w-full px-5 py-3.5 rounded-xl bg-[#FBF4EE] border ${errors.message ? 'border-red-500' : 'border-[#6B3F2A]/20'} focus:outline-none focus:ring-2 focus:ring-[#6B3F2A]/40 transition-all resize-none`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1.5">{errors.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={submitted}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-xl font-medium text-lg shadow-md transition-all flex items-center justify-center ${
                    submitted
                      ? 'bg-[#6B3F2A]/30 text-[#6B3F2A]'
                      : 'bg-[#6B3F2A] text-white hover:shadow-xl hover:bg-[#5a3524]'
                  }`}
                >
                  {submitted ? '✓ Message Sent!' : 'Send Message →'}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// SVG Icons for Social Media
function InstagramIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.305l-7.25 8.25 8.57 11.35h-6.633l-5.202-6.817-5.95 6.817H5.742l7.747-8.85L5.27 2.25h6.826l4.713 6.231 5.433-6.231zm-1.161 17.85h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}