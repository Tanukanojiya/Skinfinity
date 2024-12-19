import React, { useState, useEffect } from 'react';
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner data
  const banners = [
    {
      background: `url(${banner1}) center/cover no-repeat`,
      text: 'Welcome to Skinfinity!',
      paraText: 'Your one-stop destination for premium skincare products.',
      buttonText: 'Shop Now',
      buttonLink: '#',
    },
    {
      background: `url(${banner2}) center/cover no-repeat`,
      text: 'Glow Naturally with <br /> Gua Sha & Face Rollers',
      paraText: 'Sculpt, tone, and rejuvenate your skin with these ancient beauty tools.',
      buttonText: 'Shop Now',
      buttonLink: '#',
    },
    {
      background: `url(${banner3}) center/cover no-repeat`,
      text: 'Enjoy 50% OFF on <br /> All Skincare Products!',
      paraText: 'Limited time offer – grab the best skincare at half the price.',
      buttonText: 'Shop Now',
      buttonLink: '#',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    //Banner
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] 2xl:h-[100vh] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ background: banner.background }}
        >
          <div className="relative flex justify-start items-center h-full text-left text-green-800 px-4 sm:px-8 lg:px-16">
            <div className="space-y-4 max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold"
                dangerouslySetInnerHTML={{ __html: banner.text }}
              ></h2>
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-lime-700 opacity-80">
                {banner.paraText}
              </p>
            </div>
            
            {/* Shop Now Button  */}
            <a
              href={banner.buttonLink}
              className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 left-[2rem] sm:left-[3rem] py-2 sm:py-3 px-6 sm:px-8 bg-green-800 text-sm sm:text-lg text-white font-semibold rounded-md shadow-lg transition duration-300 hover:bg-lime-600 hover:scale-110 hover:text-black"
            >
              {banner.buttonText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
