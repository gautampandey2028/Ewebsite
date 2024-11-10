import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        
        {/* Company Overview Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are a dedicated e-commerce company focused on delivering quality products and excellent customer service. Our journey began in 2010, and since then, we've been committed to helping our customers find the best products to suit their needs.
          </p>
        </section>

        {/* Mission and Values Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Mission and Values
          </h2>
          <p className="text-gray-600 mb-4">
            Our mission is to make online shopping easy, accessible, and reliable. We believe in quality, innovation, and creating a seamless experience for our customers. Our core values are trust, integrity, and customer satisfaction.
          </p>
          <p className="text-gray-600">
            We strive to build strong relationships with our customers by focusing on providing top-notch service and continuously improving our product offerings.
          </p>
        </section>

    
            
          

        {/* Company Achievements or History Section */}
        <section className="bg-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Our Journey
          </h2>
          <p className="text-gray-600 text-center">
            Starting from a small office in 2010, we’ve grown into a recognized brand in the e-commerce industry. Over the years, we’ve served thousands of happy customers and expanded our offerings to meet the changing needs of the market.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
