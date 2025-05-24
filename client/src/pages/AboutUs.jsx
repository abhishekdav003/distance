import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

const stats = [
  { value: '197+', label: 'Courses' },
  { value: '8999+', label: 'Students' },
  { value: '10+', label: 'Placement Connections' },
  { value: '8+', label: 'Years of Experience' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="bg-red-700 text-white py-16 px-6 text-center shadow-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">We build bridges between colleges and students</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 tracking-wide drop-shadow-md">
            At EduKyu, we believe in the power of connections. With a strong network of institutions and students, we guide every learner towards the right career.
          </p>
          <motion.img
            src="/team-photo.jpg"
            alt="Our Team"
            className="rounded-xl shadow-2xl mx-auto max-w-full w-full md:w-3/4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 px-6 text-center max-w-5xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-6 text-red-700">Together we are strong</h2>
          <p className="text-red-900 text-lg leading-relaxed max-w-3xl mx-auto">
            We bring the forefront of cutting-edge innovation in education, making quality higher education accessible to all.
            EduKyu stands for appraising, elevating, and enlightening every individual’s learning curve.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeOut' }}
              className="bg-white rounded-lg shadow-md py-8 px-4 hover:shadow-xl transition-shadow cursor-default"
            >
              <div className="text-4xl font-extrabold text-red-700">{item.value}</div>
              <div className="mt-2 text-red-900 font-semibold">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16 px-6 text-center max-w-5xl mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl font-bold mb-10 text-red-700">Empowering learners to make informed career choices.</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "/icons/target.svg",
                title: "Empowerment",
                desc: "We support students in finding the right course and institution.",
              },
              {
                icon: "/icons/analytics.svg",
                title: "Accuracy",
                desc: "Precise counselling backed by research and expert advice.",
              },
              {
                icon: "/icons/support.svg",
                title: "Support",
                desc: "Your educational partner throughout your journey.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i, duration: 0.5 }}
              >
                <img src={icon} alt={title} className="w-20 mx-auto mb-6 filter drop-shadow-md" />
                <h3 className="text-2xl font-semibold mb-3 text-red-700">{title}</h3>
                <p className="text-red-900 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="bg-red-50 py-16 px-6 text-center max-w-5xl mx-auto rounded-lg shadow-md">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 text-red-700"
        >
          Our Journey
        </motion.h2>
        <motion.img
          src="/timeline.svg"
          alt="Timeline"
          className="mx-auto max-w-full rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-12 text-red-700"
        >
          Meet Our Amazing Team
        </motion.h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-red-50 rounded-lg p-6 shadow-md hover:shadow-2xl transition-shadow cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-red-300 shadow-inner mb-6" />
              <h3 className="font-semibold text-red-700 text-xl">Team Member {i + 1}</h3>
              <p className="text-red-900 mt-2">Role</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-red-700 py-16 px-6 text-center text-white shadow-inner">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-6"
        >
          Join Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-xl mx-auto mb-8 text-lg tracking-wide"
        >
          We’re always looking for passionate individuals to help us shape the future of education.
        </motion.p>
        <motion.a
          href="/careers"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 rounded-full bg-white text-red-700 font-bold shadow-lg hover:bg-red-100 transition"
        >
          See Opportunities
        </motion.a>
      </section>

      {/* Footer CTA */}
      <section className="bg-red-900 py-16 px-6 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-semibold mb-6">Have a question? Our team is happy to assist you.</h3>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-red-400 text-red-900 font-semibold shadow-lg hover:bg-red-300 transition"
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
