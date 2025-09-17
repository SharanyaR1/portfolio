import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

import yoga1 from "../assets/yoga.jpeg";
import cooking from "../assets/cooking.jpeg";
import TvImg from "../assets/TV.jpg";

import meImg from "../assets/paintings/me-paint.jpg"
import krishhImg from "../assets/paintings/krishh.jpg"
import einsteinMeImg from "../assets/paintings/einstein-me.jpeg"
import einstenImg from "../assets/paintings/einsten.jpg"
import koiImg from "../assets/paintings/koi.jpeg"
import bird1Img from "../assets/paintings/bird1.jpeg"
import birdoldImg from "../assets/paintings/bird-old.jpeg"
import koiwallImg from "../assets/paintings/koi-wall.jpeg"

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const paintings = [
  meImg,
  krishhImg,
  einsteinMeImg,
  einstenImg,
  koiImg,
  bird1Img,
  birdoldImg,
  koiwallImg
];

export default function AboutMe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paintings.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % paintings.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? paintings.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-12 text-justify">
      <Navbar />

      {/* Growing up */}
      <section className="mt-5">
        <p className="text-gray-700 leading-relaxed mb-2">
          I grew up in Bengaluru, and this city has been home for all my
          21 years and honestly, it has my whole heart. Growing up I spent summers in my mum's hometown, a small town with a
          beautiful lake, lots of green, and my grandmother's endless
          supply of food and love. How I wish we had summer vacations
          again!
        </p>
        <p className="italic text-gray-600">
          “I wish there was a way to know you're in the good old days
          before you've actually left them” — To all 'The Office' fans
          out there.
        </p>
      </section>

      {/* Yoga & Walks */}
      <section className="mt-10">
        <div
          href="#"
          className="flex flex-col items-center bg-sky-50/50 border border-gray-100 rounded-lg shadow-sm md:flex-row hover:bg-sky-100/50"
        >
          <img
            className="object-cover w-full md:w-1/3 rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={yoga1}
            alt="Yoga"
          />

          <div className="flex flex-col justify-between p-6 leading-normal flex-1">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
              Yoga & Walks
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              I start my day with an hour of yoga, and I’m proud of sticking to it consistently.
              Yoga and meditation have made me calmer, more aware, and less stressed.
              Walking is my second ritual. I aim for 10k steps daily.
              It’s also my time to reflect and plan the day ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Cooking */}
      <section className="mt-10">
        <div
          href="#"
          className="flex flex-col items-center bg-sky-50/50 border border-gray-100 rounded-lg shadow-sm md:flex-row hover:bg-sky-100/50"
        >
          <img
            className="object-cover w-full md:w-1/3 rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={cooking}
            alt="Cooking"
          />
          <div className="flex flex-col justify-between p-6 leading-normal flex-1">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
              Cooking & Food
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              I love cooking and I know my way around Indian dishes, chicken biryani is my favorite! Cooking helps me unwind, and since starting yoga, I’ve become more mindful about what I eat, though I never stress over a little snack.
              So if you see me with a bag of chips… no judgment, please.
            </p>
          </div>
        </div>
      </section>


      {/* TV */}
      <section className="mt-10">
        <div
          href="#"
          className="flex flex-col items-center bg-sky-50/50 border border-gray-100 rounded-lg shadow-sm md:flex-row hover:bg-sky-100/50"
        >
          <img
            className="object-cover w-full md:w-1/3 rounded-t-lg md:rounded-none md:rounded-s-lg"
            src={TvImg}
            alt="TV"
          />
          <div className="flex flex-col justify-between p-6 leading-normal flex-1">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
              Watching shows
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              My favorite genre of entertainment is sitcoms. Some of my top picks are 
              <em> Modern Family</em>, <em>The Office</em>, <em>Kim's Convenience</em>,
              <em> The Big Bang Theory</em>, <em>Friends</em>, and <em>Schitt's Creek</em>.

              On the regional side, I enjoy <em>Mahabharat</em> and <em>The Family Man</em>.

            </p>

          </div>
        </div>
      </section>


      {/* Art & Creativity */}
      <section className="mt-10">
        <div className="flex flex-col items-center bg-sky-50/50 border border-gray-100 rounded-lg shadow-sm hover:bg-sky-100/50">
          <div className="flex flex-col justify-between p-6 leading-normal w-full">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-800">
              Art & Creativity
            </h5>
            <p className="mb-4 font-normal text-gray-700">
              The inner child in me still gets super excited whenever I see crayons,
              paints, brush pens, or any kind of stationery. I wish I could spend more time on it than I do now. I also enjoy mural painting.
            </p>

            {/* Carousel */}
            <div className="relative w-full h-80 overflow-hidden rounded-lg">
              <img
                src={paintings[currentIndex]}
                alt="Artwork"
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Arrows for desktop */}
              <div className="hidden md:block">
                {/* Prev Button */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 
        rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:text-sky-200"
                >
                  <FaChevronLeft size={35} />
                </button>

                {/* Next Button */}
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 
        rounded-full w-10 h-10 flex items-center justify-center text-gray-700 hover:text-sky-200"
                >
                  <FaChevronRight size={35} />
                </button>
              </div>
            </div>

            {/* Arrows for mobile (below image) */}
            <div className="flex justify-center gap-30 mt-1 md:hidden">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center text-gray-700"
              >
                <FaChevronLeft size={30} />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center text-gray-700"
              >
                <FaChevronRight size={30} />
              </button>
            </div>

          </div>
        </div>
      </section>



      {/* Little Things */}
      <section className="mt-12 mb-16">
        <h2 className="underlined-heading text-2xl font-semibold mb-4 text-gray-700 inline-block relative">
          <span className="relative">
            Little Things That Make Me Happy
          </span>
        </h2>
        <ul className="list-disc pl-6 text-gray-700 marker:text-blue-200 marker:text-xl space-y-2">
          <li>When a random little kid waves at me on the street</li>
          <li>That satisfying “ting” when my watch closes the exercise rings</li>
          <li>When my yoga instructor says “very good, Sharanya” after I nail a pose</li>
          <li>Hearing people say Bengaluru instead of Bangalore</li>
          {/* <li>RCB winning the IPL this year (not little — a HUGE thing)</li> */}
          <li>Filter coffee or Elaichi tea</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}



