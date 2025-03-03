import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-[80vh]">
        <Swiper
          navigation
          autoplay={{ delay: 2000 }}
          loop
          modules={[Navigation, Autoplay]}
          className="h-full"
        >
          {[
            { image: "https://web-e-com.netlify.app/images/slider-bg.jpg", text: "Sale 20% Off On Everything" },
            { image: "/sale1.jpg", text: "Limited Time Deals!" },
            { image: "/arrival-bg.png", text: "New Arrivals Just for You" }
          ].map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div
                className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white text-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="z-10 p-6 bg-black bg-opacity-50 rounded-lg">
                  <h1 className="text-5xl font-bold mb-4">{slide.text}</h1>
                  <p className="text-xl mb-6">Unbeatable deals on the latest products</p>
                  <Link to="/shop">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                      Start Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Men’s Fashion", image: "/men.webp" },
              { name: "Women’s Fashion", image: "/women.avif" },
              { name: "Electronics", image: "/ele.jpg" },
              { name: "Home & Living", image: "/home.webp" },
              { name: "Beauty & Health", image: "/beauty.webp" },
              { name: "Sports & Outdoors", image: "/sports.webp" },
            ].map((category, index) => (
              <Link to="/shop" key={index}>
                <div className="bg-white p-6 shadow-lg rounded-lg hover:scale-105 transition-transform cursor-pointer">
                  <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials Slider */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Customers Say</h2>
          <Swiper
            autoplay={{ delay: 2000 }}
            loop
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-full max-w-3xl mx-auto"
          >
            {[
              { name: "John Doe", review: "Amazing shopping experience! Great prices and fast delivery." },
              { name: "Jane Smith", review: "The quality of the products is top-notch. Highly recommend!" },
              { name: "Alex Johnson", review: "Customer service was excellent, and the website is easy to use." },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
                  <p className="text-lg italic">"{testimonial.review}"</p>
                  <h3 className="text-xl font-bold mt-4">- {testimonial.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
