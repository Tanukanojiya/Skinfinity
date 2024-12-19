import React, { useEffect } from "react";
import vid from '../assets/video.mp4';
import AOS from 'aos';  
import 'aos/dist/aos.css';

const VideoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-out',  
      once: true, 
    });
  }, []);

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-lg shadow-lg">
            
            {/* Heading and Para with animation */}
            <div 
              className="absolute inset-0 flex flex-col justify-center items-start px-6 lg:px-12 text-white z-10 w-full sm:w-1/2"
              data-aos="fade-down"  
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
            >
              <h2 className="text-4xl font-bold mb-4 sm:mb-6 sm:text-3xl lg:text-4xl xl:text-5xl">
                New Arrival Cleanser
              </h2>
              <p className="text-lg sm:text-base sm:mb-6">
                Introducing our latest skincare cleanser, specially formulated to gently cleanse your skin 
                while maintaining its natural moisture. Perfect for all skin types, leaving your skin feeling 
                refreshed and revitalized.
              </p>
            </div>

            {/* Video Section */}
            <video
              src={vid}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[500px] object-cover sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
              data-aos="fade-up"  
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
