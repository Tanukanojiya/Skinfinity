import React, { useEffect } from 'react';
import AOS from 'aos';  
import 'aos/dist/aos.css';  
import review1 from '../assets/review_1.jpg';
import review2 from '../assets/review_2.jpg';
import review3 from '../assets/review_3.jpg';
import review4 from '../assets/review_4.png';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out',  
      once: true, 
    });
  }, []);

  return (
    <div>
      <section className="dark:bg-green-50 dark:text-gray-800">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            {/* Section Heading  */}
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">What Our Customers Say</h2>
              <p className="dark:text-gray-600">Discover how our skincare products have transformed the lives of our customers. Real reviews from real users.</p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  {/* Review 1 */}
                  <div
                    className="p-6 rounded shadow-md dark:bg-gray-50"
                    data-aos="fade-down"
                    data-aos-duration="1200" 
                    data-aos-easing="ease-in-out" 
                  >
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={review1}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Jessica Johnson</p>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                    <p>
                      "I've been using the Skinfinity Hydrating Cream for a month, and my skin feels so soft and smooth. It really helps with dry patches and gives my skin a healthy glow. Highly recommend!"
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>

                  {/* Review 2 */}
                  <div
                    className="p-6 rounded shadow-md dark:bg-gray-50"
                    data-aos="fade-right"
                    data-aos-duration="1200" 
                    data-aos-easing="ease-in-out" 
                  >
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={review2}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Sarah Lee</p>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                    <p>
                      "The Skinfinity Brightening Serum has been a game-changer for my skin! My dark spots have lightened up, and my complexion is much more even. Love how gentle it is!"
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  {/* Review 3 */}
                  <div
                    className="p-6 rounded shadow-md dark:bg-gray-50"
                    data-aos="fade-left"
                    data-aos-duration="1200" 
                    data-aos-easing="ease-in-out"
                  >
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={review3}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">David Smith</p>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                    <p>
                      "I started using the Skinfinity Anti-Aging Cream a few weeks ago, and I can see a noticeable difference. My fine lines have reduced, and my skin feels firmer and more hydrated. I love how radiant my skin looks!"
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>

                  {/* Review 4 */}
                  <div
                    className="p-6 rounded shadow-md dark:bg-gray-50"
                    data-aos="fade-up"
                    data-aos-duration="1200" 
                    data-aos-easing="ease-in-out" 
                  >
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src={review4}
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Emily Davis</p>
                        <p className="text-sm text-gray-500">Verified Customer</p>
                      </div>
                    </div>
                    <p>
                      "I love the Skinfinity Moisturizer! It absorbs quickly without feeling greasy, and my skin stays hydrated all day long. Perfect for sensitive skin!"
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
