import { useState } from "react";

// You'll need to import your sitcom images
import modernFamilyImg from "../assets/sitcoms/modern-family.jpg";
import theOfficeImg from "../assets/sitcoms/the-office.jpg";
import kimConvenienceImg from "../assets/sitcoms/kim-convenience.jpg";
import bigBangImg from "../assets/sitcoms/big-bang-theory.jpg";
import friendsImg from "../assets/sitcoms/friends.jpg";
import schittsCreekImg from "../assets/sitcoms/schitts-creek.jpg";

const SitcomSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-full">
      {/* Main slider container */}
      <div className="overflow-hidden h-full">
        <div 
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain rounded-l-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Your sitcom images array
const sitcomImages = [
  { src: modernFamilyImg, alt: "Modern Family" },
  { src: theOfficeImg, alt: "The Office" },
  { src: kimConvenienceImg, alt: "Kim's Convenience" },
  { src: bigBangImg, alt: "The Big Bang Theory" },
  { src: friendsImg, alt: "Friends" },
  { src: schittsCreekImg, alt: "Schitt's Creek" }
];

// Your complete section
export const BingingSitcomsSection = () => {
  return (
    <section className="mt-10 px-8">
      <div className="flex flex-col items-center bg-sky-50/50 border border-gray-100 rounded-lg shadow-sm md:flex-row hover:bg-sky-100/50">
        {/* Image Slider */}
        <div className="w-full md:w-1/3">
          <SitcomSlider images={sitcomImages} />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col justify-between p-6 leading-normal flex-1">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
            Binging Sitcoms
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            My favorite kind of genre when it comes to entertainment is sitcoms. They're just fun, 
            no cliffhangers which makes me binge-watch the entire show in a day or two. I can watch 
            at any time without having to think "oh what was the last scene, I forgot." My most 
            favorites are Modern Family, The Office, Kim's Convenience, The Big Bang Theory, 
            Friends, and Schitt's Creek.
          </p>
        </div>
      </div>
    </section>
  );
};
