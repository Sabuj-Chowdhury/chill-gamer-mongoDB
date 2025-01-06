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
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full overflow-hidden">
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
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[600px]">
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
              <h1 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                Welcome to <span className="text-blue-400">Chill Gamer</span>
              </h1>
              <p className="mt-2 text-sm md:text-lg drop-shadow-md">
                Experience gaming like never before.
              </p>
              <button
                className="mt-4 py-2 px-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors"
                onClick={() => navigate(`/all-reviews`)}
              >
                Explore Details
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center">
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
              <h1 className="text-3xl md:text-5xl font-bold">
                Action-Packed Adventures
              </h1>
              <p className="mt-4 text-sm md:text-lg">
                Get your adrenaline pumping with thrilling action games.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center">
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
              <h1 className="text-3xl md:text-5xl font-bold">
                Epic Multiplayer Battles
              </h1>
              <p className="mt-4 text-sm md:text-lg">
                Play and connect with gamers worldwide.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-[400px] md:h-[600px] flex justify-center items-center">
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
