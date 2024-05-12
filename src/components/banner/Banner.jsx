import ban1 from "../../assets/banner/b1.jpg";
import ban2 from "../../assets/banner/b2.jpg";
import ban3 from "../../assets/banner/b3.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${ban2})` }}
          >
            <div className="hero-overlay bg-opacity-25"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Exploring the Frontier of Technology
                </h1>
                <p className="mb-5 font-serif">
                  Join us at TechTrove as we delve into the latest innovations
                  and trends in technology. From AI breakthroughs to the newest
                  in mobile and software development, stay ahead of the curve
                  with in-depth articles, expert insights, and exclusive updates
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${ban1})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Dive Deep into Tech Analysis
                </h1>
                <p className="mb-5 font-serif">
                  Get beneath the surface with comprehensive reviews and
                  comparative analysis of the latest tech gadgets and software
                  solutions. Whether you’re a tech enthusiast or a seasoned
                  professional, our detailed insights help you make informed
                  decisions.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${ban3})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-4xl font-dm md:text-6xl font-bold">
                  Tomorrow&apos;s Tech, Today
                </h1>
                <p className="mb-5 font-serif">
                  Explore forecasts and visionary content about the future of
                  technology. Discover how emerging tech is shaping our lives,
                  workplaces, and societies. With TechTrove, always stay one
                  step ahead of the technological curve.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
