import Navbar from "../components/Navbar";
import ProjectCarousel from "../components/Projects";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

export default function Home() {
    return (
        /* Container */
        <div className="max-w-5xl mx-auto px-12 text-justify">

            {/* Navigation bar section */}
            <Navbar />

            {/* Small about section */}
            <section className="mt-5">
                <main>
                    <h1 className="text-3xl font-semibold leading-snug text-gray-700">
                        Hi, I&apos;m{" "}
   <h2 className="underlined-heading text-3xl font-semibold text-gray-700 inline-block relative">
  <span className="relative">
    Sharanya
  </span>
</h2>

                    </h1>

                    <p className="mt-1 text-base leading-relaxed text-gray-700">

                        I recently graduated with a Bachelor of Engineering in Computer Science and I’m currently a Software Developer Intern in Endpoint Engineering at Target Corporation.
                        Like most of us in tech, I’ve honestly learned way more from YouTube and internships than from college lectures.
                    </p>

                    <p className="mt-4 text-base leading-relaxed text-gray-700">

                        I’m a developer who loves building meaningful projects, usually the kind that is needed by me or someone around me and make life a little easier.
                        That’s how most of my ideas are born. The best part? When someone else uses what I built and says <span className="italic">“Hey, this actually helps!” </span>that’s the moment that makes me love what I do.
                    </p>
                </main>
            </section>

            {/* Project Carousel section */}
            <ProjectCarousel />

            {/* Blog section */}
            <Blogs />

            {/* Footer section */}
            <Footer />
        </div>
    );
}
