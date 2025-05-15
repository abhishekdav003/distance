import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

const stats = [
  { value: '197+', label: 'Courses' },
  { value: '8999+', label: 'Students' },
  { value: '10+', label: 'Placement Connections' },
  { value: '8+', label: 'Years of Experience' },
];

const AboutUs = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">We build bridges between colleges and students</h1>
          <p className="text-lg mb-8 text-gray-600">
            At EduKyu, we believe in the power of connections. With a strong network of institutions and students,
            we guide every learner towards the right career.
          </p>
          <img src="/team-photo.jpg" alt="Our Team" className="rounded-lg shadow mx-auto w-full max-w-4xl" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Together we are strong</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We bring the forefront of cutting-edge innovation in education, making quality higher education accessible
            to all. EduKyu stands for appraising, elevating, and enlightening every individual’s learning curve.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <div className="text-3xl font-bold text-blue-600">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Empowering learners to make informed career choices.</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <img src="/icons/target.svg" alt="Empower" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Empowerment</h3>
              <p className="text-gray-600">We support students in finding the right course and institution.</p>
            </div>
            <div>
              <img src="/icons/analytics.svg" alt="Accuracy" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Accuracy</h3>
              <p className="text-gray-600">Precise counselling backed by research and expert advice.</p>
            </div>
            <div>
              <img src="/icons/support.svg" alt="Support" className="w-16 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Your educational partner throughout your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Journey</h2>
        <img src="/timeline.svg" alt="Timeline" className="mx-auto max-w-4xl" />
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-8">Meet Our Amazing Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Replace with actual team members */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded shadow">
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-4" />
                <h3 className="font-medium">Team Member {i + 1}</h3>
                <p className="text-sm text-gray-600">Role</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-12 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Join Our Team</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          We’re always looking for passionate individuals to help us shape the future of education.
        </p>
        <a href="/careers" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          See Opportunities
        </a>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Have a question? Our team is happy to assist you.</h3>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
