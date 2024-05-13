import { Button } from "flowbite-react";

const RecentBlogs = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl md:text-5xl font-semibold text-center ">
        Recent Blogs
      </h1>
      <p className="w-[80%] text-center opacity-70 mx-auto mt-3">
        Stay ahead of the curve with our Recent Blogs section, where you can
        find the latest posts covering cutting-edge technology trends and
        innovations. Whether you&apos;re looking for the newest insights in
        cybersecurity, the latest reviews on must-have gadgets, or tips and
        tricks to enhance your digital life, this section keeps you updated with
        fresh, authoritative content. Dive into our most recent articles to
        ensure you don&apos;t miss out on any tech advancements!
      </p>

      <div>
        <div className="mt-8">
          <div className="container grid grid-cols-12 mx-auto bg-[#F1F3F4] rounded-xl">
            <div
              className="bg-no-repeat  bg-cover  col-span-full md:col-span-5 row-span-full"
              style={{
                backgroundImage:
                  "url('https://source.unsplash.com/random/640x480')",
                backgroundPosition: "center center",
                backgroundBlendMode: "multiply",
                backgroundSize: "cover",
              }}
            ></div>
            <div className="flex flex-col p-6 col-span-full row-span-full md:col-span-7 lg:p-10 ml-0 md:ml-8">
              <div className="flex justify-start">
                <span className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/90 ">
                  Labelallll
                </span>
              </div>
              <h1 className="text-3xl font-semibold ">
                Lorem ipsum dolor sit.
              </h1>
              <p className="flex-1 pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                reprehenderit adipisci tempore voluptas laborum quod.
              </p>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-400"
              >
                <span>Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <div className="flex items-center gap-5 pt-2">
                <Button outline gradientDuoTone="purpleToBlue">
                  Details
                </Button>
                <Button gradientDuoTone="purpleToBlue">Wish List</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
