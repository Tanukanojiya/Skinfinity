import React, { useState, useEffect, useRef } from "react";
import lotionImg from "../assets/lotion.jpg";
import faceCreamImg from "../assets/faceCream.jpg";
import serumImg from "../assets/serum.jpg";
import guaShaImg from "../assets/guaSha.jpg";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [visibleCards, setVisibleCards] = useState({});
  const containerRef = useRef(null);

  const products = [
    // Data 
    {
      id: 1,
      name: "Lotions",
      description: "Nourish your skin deeply with our hydrating lotions",
      image: lotionImg,
    },
    {
      id: 2,
      name: "Serums",
      description: "Glow naturally with our nourishing face serums",
      image: serumImg,
    },
    {
      id: 3,
      name: "Face Cream",
      description: "Hydrate and glow with our luxurious face creams",
      image: faceCreamImg,
    },
    {
      id: 4,
      name: "Gua Sha & Face Rollers",
      description:
        "Elevate your skincare routine with our premium Gua Sha tools",
      image: guaShaImg,
    },
  ];

  const openPopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  // Alert Popup 
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart!`);
    alert(`${product.name} has been added to your cart.`);
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.dataset.id;
          setVisibleCards((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, options);

    const items = containerRef.current.querySelectorAll(".product-card");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section className="w-full bg-gray-100 px-6 py-10 xl:px-[3rem]">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Explore Our Products
        </h1>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Discover the perfect addition to your skincare routine.
        </p>
      </div>

      {/* Product Cards */}
      <div ref={containerRef} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-id={index}
              className={`product-card group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all transform ${
                visibleCards[index]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              } duration-700 ease-in-out`}
              onClick={() => openPopup(product)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 sm:h-48 object-cover transition-all duration-300 group-hover:scale-110 group-hover:transition-all"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl text-gray-800 font-bold mb-2 hover:text-gray-400">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 max-w-md">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <button
              onClick={() => handleAddToCart(selectedProduct)}
              className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
