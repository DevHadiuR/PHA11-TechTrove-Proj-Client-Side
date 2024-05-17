import NavBar from "../../Shared/navbar/NavBar";

const FeaturedBanner = () => {
  return (
    <>
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>

      <div
        className="hero min-h-[520px]"
        style={{
          backgroundImage: `url(/featuredBanner.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content mt-28">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl max-w-2xl mx-auto  md:text-4xl font-bold text-white opacity-85">
              The Thinker’s Collection: Top 10 Thought-Provoking Posts
            </h1>
            <p className="mb-5 text-lg md:text-xl font-medium opacity-90">
              Journey of profound insights with The Thinker’s Collection. This
              exclusive selection showcases our top 10 posts, celebrated for
              their depth and detail. Each article is a masterpiece of
              reflection and analysis, inviting you to delve into topics that
              captivate and challenge the mind. Uncover the richness of extended
              discourse and let your intellect revel in the luxury of long-form
              content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBanner;
