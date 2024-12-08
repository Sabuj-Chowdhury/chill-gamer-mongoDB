import Banner from "../Components/Banner/Banner";
import CommunityHighlights from "../Components/CommunityHighlights/CommunityHighlights";
import TopRatedGames from "../Components/TopRatedGames/TopRatedGames";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div>
        <Banner></Banner>
        <TopRatedGames></TopRatedGames>
        <CommunityHighlights></CommunityHighlights>
        <UpcomingEvents></UpcomingEvents>
      </div>
    </div>
  );
};

export default Home;
