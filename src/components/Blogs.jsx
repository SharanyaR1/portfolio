import recentBlogImg from "../assets/RecentBlog.webp";

export default function Blogs() {
  return (
    <section>
   <h2 className="underlined-heading text-3xl font-semibold mb-4 text-gray-700 inline-block relative mt-12">
  <span className="relative">
    Recent Blog
  </span>
</h2>

      {/* Blog Card */}
      <a
        href="https://blog-sharanya.hashnode.dev/behind-the-scenes-webpack-and-vite"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-5xl relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mt-2"
      >
        {/* Background Image */}
        <img
          src={recentBlogImg}
          alt="Behind the Scenes: Webpack and Vite"
          className="w-full h-95 object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content on top of image */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="text-2xl font-semibold mb-2">
            Behind the Scenes: Webpack and Vite
          </h3>
          <p className="text-sm text-gray-200">
            A deep dive into how bundlers like Webpack and Vite work under the hood.
          </p>
        </div>
      </a>
    </section>
  );
}
