import { Fade } from "react-awesome-reveal";

import Banner from "../Components/Banner/Banner";
import CommunityHighlights from "../Components/CommunityHighlights/CommunityHighlights";
import TopRatedGames from "../Components/TopRatedGames/TopRatedGames";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Fade duration={1000}>
        <Banner />
      </Fade>

      {/* Top Rated Games */}
      <Fade duration={1000}>
        <TopRatedGames />
      </Fade>

      {/* Community Highlights */}
      <Fade duration={1000}>
        <CommunityHighlights />
      </Fade>

      {/* Upcoming Events */}
      <Fade duration={1000}>
        <UpcomingEvents />
      </Fade>
    </div>
  );
};

export default Home;
