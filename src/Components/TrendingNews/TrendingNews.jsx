import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const TrendingNews = () => {
  const news = [
    {
      title: "New DLC for 'Racing Masters' Released!",
      description:
        "The highly anticipated DLC for Racing Masters introduces 10 new tracks, 5 cars, and more! Experience high-speed thrills with this exciting expansion.",
      link: "https://www.racingmaster.game/",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-dhFdbwhY7CKQWzMCF3hHwGMohgAgNtp27Q&s",
    },
    {
      title: "E-Sports Championship Finals Announced",
      description:
        "The championship will feature the top 8 teams competing for a $1 million prize pool. Don’t miss this epic showdown!",
      link: "https://www.esportsworldcup.com/en",
      thumbnail:
        "https://images.unsplash.com/photo-1548686304-5c3be888a00b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Top 10 Games to Watch in 2025",
      description:
        "From RPGs to shooters, these upcoming titles are generating buzz across the gaming community.",
      link: "https://www.pcmag.com/picks/the-best-pc-games",
      thumbnail:
        "https://i.pcmag.com/imagery/roundups/06pbrFQKnLsVI0PIgatg35X-34.fit_lim.size_1028x578.v1707500494.jpg",
    },
    {
      title: "'Legends of Valoria' Surpasses 1 Million Players",
      description:
        "The hit RPG continues to dominate with a growing player base and rave reviews. See what makes this game a fan favorite.",
      link: "https://markets.businessinsider.com/news/currencies/valr-surpasses-1-million-users-amid-global-expansion-1034018072",
      thumbnail:
        "https://ik.imagekit.io/storybird/images/a12adf93-e1c4-4000-aaf2-f44229f0460d/0_444218026.webp?tr=q-80",
    },
  ];

  return (
    <div className="my-12 max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center text-amber-500 mb-6">
        Trending News
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 30,
          stretch: 10,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="p-6 bg-gray-800 text-white rounded-lg shadow-lg border border-gray-700 
                           transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4 transition-opacity duration-300 hover:opacity-90"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-amber-400 font-medium hover:text-amber-300 hover:underline transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingNews;
