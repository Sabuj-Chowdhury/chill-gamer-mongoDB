import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Banner from "../Components/Banner/Banner";
import CommunityHighlights from "../Components/CommunityHighlights/CommunityHighlights";
import TopRatedGames from "../Components/TopRatedGames/TopRatedGames";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <Fade duration={1000}>
        <Banner data-tip="Welcome to Chill Gamer!" />
      </Fade>

      {/* Top Rated Games */}
      <Fade duration={1000}>
        <TopRatedGames data-tip="Check out the best rated games!" />
      </Fade>

      {/* Community Highlights */}
      <Fade duration={1000}>
        <CommunityHighlights data-tip="See what the community is highlighting!" />
      </Fade>

      {/* Upcoming Events */}
      <Fade duration={1000}>
        <UpcomingEvents data-tip="Don't miss our upcoming events!" />
      </Fade>

      <ReactTooltip />
    </div>
  );
};

export default Home;
