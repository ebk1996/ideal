import React from 'react';
import { BookOpen, TrendingUp, Users, Award, Briefcase, Phone, Mail, MapPin, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 md:px-12 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {/* Logo Placeholder */}
            <TrendingUp className="w-8 h-8 text-blue-700" />
            <span className="text-2xl font-bold text-gray-900">IdealTrade Institute</span>
          </div>
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            <li><a href="#home" className="text-gray-700 hover:text-blue-700 transition duration-300">Home</a></li>
            <li><a href="#courses" className="text-gray-700 hover:text-blue-700 transition duration-300">Courses</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-700 transition duration-300">About Us</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-700 transition duration-300">Contact</a></li>
          </ul>
          <div className="hidden md:flex space-x-4 items-center">
            <button className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition duration-300 font-medium shadow-md">
              Enroll Now
            </button>
          </div>
          <button className="md:hidden text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0A2342/FFFFFF?text=Trading+Education')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
            Master the Markets with Expert Guidance
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl animate-fade-in-up delay-200">
            Unlock your potential in trading and investing with our comprehensive courses and experienced mentors.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center animate-fade-in-up delay-400">
            <button className="px-8 py-3 bg-blue-700 text-white rounded-full text-lg font-semibold hover:bg-blue-800 transition duration-300 shadow-lg">
              Explore Our Courses
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://placehold.co/600x400/E0E0E0/333333?text=About+Us+Image"
              alt="About IdealTrade Institute"
              className="rounded-lg shadow-xl w-full"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Found"; }}
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About IdealTrade Institute</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At IdealTrade Institute, we are dedicated to providing top-tier education in financial markets. Our mission is to empower individuals with the knowledge, skills, and confidence to navigate the complexities of trading and investing successfully.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Founded by seasoned professionals, our curriculum is designed to be practical, up-to-date, and accessible to learners of all levels, from beginners to advanced traders. We believe in hands-on learning and continuous support.
            </p>
            <button className="mt-8 px-6 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition duration-300 shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src="https://placehold.co/400x250/F0F0F0/333333?text=Forex+Trading"
                alt="Forex Trading Course"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/E0E0E0/333333?text=Image+Not+Found"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Introduction to Forex Trading</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Learn the fundamentals of the foreign exchange market, currency pairs, and basic trading strategies.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span><BookOpen className="inline-block w-4 h-4 mr-1" /> 10 Modules</span>
                  <span><Users className="inline-block w-4 h-4 mr-1" /> Beginner</span>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                  View Course
                </button>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src="https://placehold.co/400x250/F0F0F0/333333?text=Stock+Market"
                alt="Stock Market Course"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/E0E0E0/333333?text=Image+Not+Found"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Advanced Stock Market Strategies</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Dive deep into technical analysis, fundamental analysis, and advanced equity trading techniques.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span><BookOpen className="inline-block w-4 h-4 mr-1" /> 15 Modules</span>
                  <span><Users className="inline-block w-4 h-4 mr-1" /> Intermediate</span>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                  View Course
                </button>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
              <img
                src="https://placehold.co/400x250/F0F0F0/333333?text=Crypto+Trading"
                alt="Cryptocurrency Trading Course"
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/E0E0E0/333333?text=Image+Not+Found"; }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cryptocurrency Trading Essentials</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Understand the blockchain, crypto exchanges, and strategies for trading digital assets.
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span><BookOpen className="inline-block w-4 h-4 mr-1" /> 8 Modules</span>
                  <span><Users className="inline-block w-4 h-4 mr-1" /> Beginner</span>
                </div>
                <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
                  View Course
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose IdealTrade Institute?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-lg">
              <Award className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-sm opacity-90">Learn from industry veterans with years of market experience.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Curriculum</h3>
              <p className="text-sm opacity-90">Structured courses covering all aspects of trading.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-lg">
              <Briefcase className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Practical Application</h3>
              <p className="text-sm opacity-90">Focus on real-world strategies and hands-on exercises.</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-800 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-sm opacity-90">Join a vibrant community of fellow traders and learners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-left">
              <p className="text-gray-700 italic mb-4">
                "IdealTrade Institute transformed my understanding of the markets. The instructors are phenomenal, and the course content is incredibly practical. Highly recommend!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/60x60/E0E0E0/333333?text=JD"
                  alt="Student Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Jane Doe</p>
                  <p className="text-sm text-gray-600">Forex Trading Student</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-left">
              <p className="text-gray-700 italic mb-4">
                "I started with zero knowledge, and now I feel confident in my trading decisions. The support from the IdealTrade team is unmatched. Best investment I've made!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://placehold.co/60x60/E0E0E0/333333?text=AS"
                  alt="Student Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">Alex Smith</p>
                  <p className="text-sm text-gray-600">Stock Market Course Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Enroll */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Trading Journey?</h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Join thousands of successful traders who started their journey with IdealTrade Institute.
          </p>
          <button className="px-10 py-4 bg-white text-blue-700 rounded-full text-xl font-bold hover:bg-gray-100 transition duration-300 shadow-lg transform hover:scale-105">
            Enroll Today <ChevronRight className="inline-block ml-2 w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-700" />
              <span className="text-2xl font-bold text-white">IdealTrade Institute</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Empowering the next generation of traders and investors through world-class education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition duration-300">Courses</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Forex Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Stock Market</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Cryptocurrency</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Options Trading</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <p className="flex items-center mb-2">
              <MapPin className="w-5 h-5 mr-2 text-gray-400" />
              123 Trade Street, Finance City, FC 54321
            </p>
            <p className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-gray-400" />
              +1 (555) 123-4567
            </p>
            <p className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-gray-400" />
              info@idealtrade.institute
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} IdealTrade Institute. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
