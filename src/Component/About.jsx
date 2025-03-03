import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Welcome to our e-commerce platform, where we bring you top-quality products with the best shopping experience. We are committed to excellence, innovation, and customer satisfaction.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Story</h2>
          <p className="text-gray-600 text-lg text-center">
            Since our inception in 2010, we have grown from a small startup to a leading online marketplace. Our journey is fueled by passion, technology, and a customer-centric approach.
          </p>
        </section>

        {/* Mission and Values Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg">
              Our mission is to make online shopping effortless, secure, and enjoyable. We strive to provide high-quality products at competitive prices with seamless service.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="text-gray-600 text-lg space-y-2">
              <li>✅ Customer First</li>
              <li>✅ Quality Assurance</li>
              <li>✅ Innovation & Technology</li>
              <li>✅ Transparency & Trust</li>
            </ul>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-700">🚀 Fast Shipping</h3>
              <p className="text-gray-600">We deliver your orders quickly and efficiently.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-700">🔒 Secure Payments</h3>
              <p className="text-gray-600">Your transactions are safe with us.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-700">📞 24/7 Support</h3>
              <p className="text-gray-600">We’re always here to assist you.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-200 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“Amazing service and high-quality products! I love shopping here.”</p>
              <h4 className="mt-4 font-bold">- John Doe</h4>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“Super fast shipping and great customer support. Highly recommend!”</p>
              <h4 className="mt-4 font-bold">- Sarah Smith</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;