import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlanetsImg from "../assets/books/its-all-in-the-planets.jpg";  
import LittleImg from "../assets/books/a-hundred-little-flames.jpg";
import FanGirlImg from "../assets/books/fan-girl.jpg";  
import StarsImg from "../assets/books/fault-in-our-stars.jpg";
import fivePointImg from "../assets/books/five-point-someone.jpg"

import MoneyImg from "../assets/books/the-psychology-of-money.jpg"
import InfluenceImg from "../assets/books/influence.jpg"



export default function Books() {
  const teenBooks = [
    { title: "It’s All In The Planets", cover: PlanetsImg },
    { title: "A Hundred Little Flames", cover: LittleImg },
    { title: "Five Point Someone", cover: fivePointImg },
    { title: "The Fault in Our Stars", cover: StarsImg },
    { title: "FanGirl", cover: FanGirlImg }
  ];

  const adultBooks = [
    { title: "Psychology of Money", cover: MoneyImg },
    { title: "Influence", cover: InfluenceImg},
  ];

  return (
    <div className="max-w-5xl mx-auto px-12 text-justify">
      <Navbar />

      <section className="mt-5">
        {/* <h1 className="text-3xl md:text-4xl lg:text-4xl font-semibold mb-4 text-gray-700">
          Books I Like
        </h1> */}

        <p className="text-gray-600 mb-2 leading-relaxed">
  I’ve loved reading since I was a kid — starting with{" "}
  <span className="italic">Tinkle</span>, <span className="italic">Dork Diaries</span>,{" "}
  <span className="italic">Diary of a Wimpy Kid</span>, Roald Dahl, and almost every
  Enid Blyton book I could get my hands on.  
  As I grew up, I got into young adult stories full of teen drama, romance, and
  feel-good vibes (I’m still a sucker for those in both books and movies).  
  These days, I’m making the shift toward self-help and non-fiction. I don’t read
  as much as I used to but I’m slowly finding my way back into it and enjoying the process.
</p>


        {/* Adult Books */}
        <div className="mt-10">
 <h2 className=" underlined-heading text-3xl font-semibold mb-4 text-gray-700 inline-block relative">
  <span className="relative">
     Recent Reads
  </span>
</h2>

          {/* <p className="mb-4 text-gray-600 italic">
            Adulting made me pick these — but don’t worry, I still secretly love teen rom-coms if you tempt me with one!
          </p> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
            {adultBooks.map((book, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-48 h-auto object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-center text-gray-700">{book.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teen Era */}
        <div className="mt-10">
  <h2 className="underlined-heading text-3xl font-bold mb-4 text-gray-700 inline-block relative">
  <span className="relative">
    Young Adult Favourites
  </span>
</h2>
          {/* <p className="mb-4 text-gray-600 italic">
            Ah, the rom-com and dramatic teenage years… I blame hormones for some of these choices.
          </p> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-4">
            {teenBooks.map((book, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-48 h-auto object-cover rounded-lg shadow-md"
                />
                <p className="mt-2 text-center text-gray-700">{book.title}</p>
              </div>
            ))}
          </div>
        </div>


      </section>

      <Footer />
    </div>
  );
}
