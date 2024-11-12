"use client"
import thumb from "@/public/images/image.jpg"; // Replace with your actual image path
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on component load
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="relative rounded-lg flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white p-8 md:p-16 overflow-hidden">
      
      {/* Content Section */}
      <div
        className={`flex-1 lg:max-w-lg p-4 md:p-10 lg:p-16 text-center lg:text-left transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">
          Md Shahnewaz Ibrahim
        </h1>
        <h2 className="text-xl font-semibold mb-6 text-gray-200 tracking-wide">
          Web Developer | Finance Graduate
        </h2>

        <p className="text-md md:text-lg leading-relaxed mb-4 text-gray-100 tracking-wide">
          With a solid foundation in web development and a passion for technology, Md Shahnewaz Ibrahim brings expertise in the Laravel framework, Vue.js, JavaScript, Tailwind CSS, and MySQL. He holds a BBA in Finance from Southeast University and has a comprehensive educational background with top achievements at BAF Shaheen College, Kurmitola. Currently, he’s a Junior Web Developer at Digit Gate IT, where he’s building responsive, dynamic applications.
        </p>

        <p className="text-md md:text-lg leading-relaxed mb-6 text-gray-100 tracking-wide">
          Having recently completed an online web development course at Ostad, Shahnewaz is skilled in both front-end and back-end development. His portfolio showcases work on payment processing, Blade and Vue.js component integration, API-based projects. Shahnewaz’s drive for excellence and ability to learn quickly make him a valuable asset to any tech team.
        </p>

        <div className="flex justify-center lg:justify-start">
          <button className="bg-yellow-400 text-indigo-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-indigo-800 transition-all duration-300 transform hover:scale-105">
            View Portfolio
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div
        className={`flex-1 flex justify-center lg:justify-end p-4 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <Image
          src={thumb}
          alt="Md Shahnewaz Ibrahim Himu"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-lg border-4 border-white"
          placeholder="blur"
        />
      </div>
    </section>
  );
}
