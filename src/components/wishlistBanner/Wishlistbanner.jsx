import NavBar from "../../Shared/navbar/NavBar";

const Wishlistbanner = () => {
  return (
    <>
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>

      <div
        className="hero min-h-[520px]"
        style={{
          backgroundImage: `url(/allBLogBanner.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content mt-28">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl max-w-2xl mx-auto  md:text-5xl font-bold text-white opacity-85">
              Explore Our All the News & Updates of Gaming
            </h1>
            <p className="mb-5 text-xl md:text-2xl font-medium opacity-90">
              Welcome to the universe of tech in here, your portal to the latest
              in AI, gaming, and more. Discover articles that push technological
              boundaries, written by leading voices in the industry. Whether
              you&apos;re seeking a deep dive or a brief update, find your next
              digital inspiration here.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlistbanner;
