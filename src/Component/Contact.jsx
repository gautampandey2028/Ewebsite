import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        
        {/* Contact Page Header */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or need assistance? Reach out to us and we'll be happy to help!
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-lg font-medium">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-lg font-medium">Message</label>
              <textarea
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                rows="5"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg text-lg font-semibold">
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Information Section */}
        <section className="bg-gray-200 rounded-lg p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Contact Details</h2>
          <div className="text-lg text-gray-700 space-y-4 text-center">
            <p>
              📍 <strong>Address:</strong> 123 E-Commerce Street, Online City, 56789
            </p>
            <p>
              📞 <strong>Phone:</strong> +1 (800) 123-4567
            </p>
            <p>
              📧 <strong>Email:</strong> support@ecommerce.com
            </p>
            <p>
              🕒 <strong>Business Hours:</strong> Mon-Fri, 9 AM - 6 PM
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;