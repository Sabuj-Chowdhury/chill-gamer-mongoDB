import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectCreative,
  EffectFade,
  Parallax,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay, EffectCreative, EffectFade, Parallax]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
            rotate: [0, 100, 0],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
        parallax={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-screen">
            {/* Background Image */}
            <img
              data-swiper-parallax="-50%"
              src={banner2}
              alt="Slide 1"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Text and Button */}
            <div
              data-swiper-parallax="-200%"
              className="absolute top-10 left-10 z-10 text-left text-white space-y-4 px-6 md:px-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                Welcome to <span className="text-blue-400">Chill Gamer</span>
              </h1>
              <p className="mt-2 text-lg md:text-2xl drop-shadow-md">
                Experience gaming like never before.
              </p>
              <button className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-screen flex justify-center items-center">
            <img
              data-swiper-parallax="-50%"
              src={banner4}
              alt="Slide 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              data-swiper-parallax="-150%"
              className="z-10 text-center text-white px-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                Action-Packed Adventures
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Get your adrenaline pumping with thrilling action games.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-screen flex justify-center items-center">
            <img
              data-swiper-parallax="-50%"
              src={banner3}
              alt="Slide 3"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              data-swiper-parallax="-300%"
              className="z-10 text-center text-white px-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold">
                Epic Multiplayer Battles
              </h1>
              <p className="mt-4 text-lg md:text-2xl">
                Play and connect with gamers worldwide.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative h-screen flex justify-center items-center">
            <img
              data-swiper-parallax="-50%"
              src={banner1}
              alt="Slide 4"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
