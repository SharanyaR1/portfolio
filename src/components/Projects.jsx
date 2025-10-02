import React, { useState, useRef, useEffect } from 'react';
import codeCanvasImg from '../assets/projects/CodeCanvas.png';
import pingyouImg from '../assets/projects/1.png';
import royalSchoolImg from '../assets/projects/rps.jpg';
import slackbotImg from '../assets/projects/SlackBot.png';

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const projects = [
    { id: 1, title: "Code Canvas", description: "A clean and colorful way to add notes to your code, think of it as your personal whiteboard for coding", bgImage: codeCanvasImg, link: "http://marketplace.visualstudio.com/items?itemName=SharanyaRamchandra.code-canvas" },
    { id: 2, title: "Ping You", description: "A Telegram bot that helps users track keywords in real time across multiple Telegram groups", bgImage: pingyouImg, link: "https://github.com/SharanyaR1/Ping-You-Bot" },
    { id: 3, title: "RPS Webiste", description: "A Bangalore-based school website to increase their online presence which I freelanced", bgImage: royalSchoolImg, link: "https://royalpublicschool.in/" },
    { id: 4, title: "Checks Notifier", description: "A Slack bot that notifies you when any one of the Github checks fail during the run", bgImage: slackbotImg, link: "https://github.com/SharanyaR1/Checks-Notifier" },
  ];

  // Helper to get the width of one slide + gap (works for all breakpoints)
  const getSlideWidth = () => {
    const container = scrollContainerRef.current;
    if (!container) return 0;
    const firstCard = container.querySelector('[data-card]');
    if (!firstCard) return 0;
    const cardW = firstCard.getBoundingClientRect().width;
    const cs = window.getComputedStyle(container);
    const gapX = parseInt(cs.columnGap || cs.gap || '0', 10) || 0;
    return cardW + gapX;
  };

 const handleScroll = () => {
  const container = scrollContainerRef.current;
  if (!container) return;

  const { scrollLeft, scrollWidth, clientWidth } = container;

  // total "scrollable width"
  const maxScrollLeft = scrollWidth - clientWidth;

  // relative progress (0 to 1)
  const progress = scrollLeft / maxScrollLeft;

  // map progress to dot index
  const newIndex = Math.round(progress * (projects.length - 1));

  setCurrentIndex(newIndex);
};


  // Recompute index on resize so dots stay in sync
  useEffect(() => {
    const onResize = () => handleScroll();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section>
      {/* <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-snug mb-4 text-gray-700">
        <span className="bg-sky-100 px-1 transition hover:bg-transparent hover:text-transparent hover:[-webkit-text-stroke:1px_black]">
          Things I have built
        </span>
      </h2> */}

        <h2 className="underlined-heading text-3xl font-semibold text-gray-700 inline-block relative mt-12">
  <span className="relative">
    Things I've Built
  </span>
</h2>

      {/* <p className="mb-4 text-sm md:text-lg lg:text-xl xl:text-md leading-relaxed text-justify word-space text-gray-700">
        Each one started with a small problem I wanted to solve or something I was just curious about.
      </p> */}

      <div className="relative">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="mt-5 flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-0 scroll-smooth touch-pan-x"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              data-card
              className="
                snap-center flex-none
                w-full
                sm:w-[340px] md:w-[360px] lg:w-[380px] xl:w-[400px]
                min-h-[250px] sm:min-h-[340px] lg:min-h-[370px]
                rounded-2xl relative overflow-hidden group
                shadow-lg
              "
            >
              {/* Background image */}
              <img
                src={project.bgImage}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-10000 group-hover:scale-110"
              />

              {/* Dark tint overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Card content */}
              <div className="relative z-20 p-6 sm:p-5 md:p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-white leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 border border-gray-200 text-sm sm:text-base text-center"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-2 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = scrollContainerRef.current;
                if (!container) return;
                const slide = getSlideWidth();
                container.scrollTo({ left: index * slide, behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                  ? 'bg-sky-100 scale-125 border border-sky-200'
                  : 'bg-sky-100 hover:bg-sky-400 border border-sky-100'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProjectCarousel;
