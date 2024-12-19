import React from "react";

const Faq = () => {
  return (
    <section className="bg-gray-100 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your skincare queries answered. Can't find what you're looking for?
            <br />
            Reach out to us, and we’ll be happy to assist!
          </p>
        </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 items-center">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="w-full max-w-3xl  bg-white rounded-lg shadow-md transition-all transform hover:scale-105 hover:bg-lime-100"
            >
              <details className="group w-full p-6">
                <summary className="font-semibold text-lg text-green-800 cursor-pointer flex justify-between items-center">
                  {faq.question}
                  <span className="text-primary group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed group-open:animate-fadeIn">
                  {faq.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Data
const faqData = [
  {
    question: "What ingredients are used in your skincare products?",
    answer:
      "Our skincare products are formulated with natural, organic ingredients that are gentle on your skin. We avoid harsh chemicals to ensure safety and effectiveness.",
  },
  {
    question: "Are your products suitable for all skin types?",
    answer:
      "Yes, our products are designed to cater to a variety of skin types, including sensitive skin. Always check the product details for specific recommendations.",
  },
  {
    question: "Do you test your products on animals?",
    answer:
      "No, we are a cruelty-free brand and do not test our products on animals. We are committed to ethical and sustainable practices.",
  },
  {
    question: "How should I store my skincare products?",
    answer:
      "Store your skincare products in a cool, dry place, away from direct sunlight to maintain their effectiveness and longevity.",
  },
  {
    question: "Can I return products if they don’t work for me?",
    answer:
      "Yes, we offer a hassle-free return policy within 30 days of purchase. Please refer to our return policy page for more details.",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "Shipping usually takes 3-7 business days, depending on your location. We provide tracking details for all orders.",
  },
];

export default Faq;
