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

        {/* Team Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            
            {/* Team Member 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">Jane Doe</h3>
                <p className="text-gray-500 mb-2">CEO</p>
                <p className="text-gray-600">
                  Passionate about driving growth and building lasting relationships.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">John Smith</h3>
                <p className="text-gray-500 mb-2">CTO</p>
                <p className="text-gray-600">
                  Leading technology innovation and creating seamless user experiences.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">Emily Davis</h3>
                <p className="text-gray-500 mb-2">Head of Marketing</p>
                <p className="text-gray-600">
                  Crafting creative strategies to reach and engage our audience.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Team Member"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">Mike Johnson</h3>
                <p className="text-gray-500 mb-2">Customer Service Lead</p>
                <p className="text-gray-600">
                  Dedicated to ensuring customer satisfaction and solving problems.
                </p>
              </div>
            </div>

          </div>
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
