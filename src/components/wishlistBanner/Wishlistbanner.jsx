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
          backgroundImage: `url(/w2.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content mt-28">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-3xl max-w-xl mx-auto  md:text-5xl font-bold text-white opacity-85">
              My Wishlist of Inspiring Blogs
            </h1>
            <p className="mb-5 text-xl md:text-2xl font-medium opacity-90">
              Welcome to your Wishlist page! Here, you can easily access all the
              blogs you&apos;ve saved for later. Browse through your collection
              of favorite articles and never miss out on the content that
              matters most to you. Whether you&apos;re revisiting a
              thought-provoking post or catching up on your reading, your
              personalized wishlist is just a click away. Enjoy your curated
              list of must-read blogs!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlistbanner;
