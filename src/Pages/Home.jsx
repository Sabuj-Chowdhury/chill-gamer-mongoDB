import Banner from "../Components/Banner/Banner";
import CommunityHighlights from "../Components/CommunityHighlights/CommunityHighlights";
import TopRatedGames from "../Components/TopRatedGames/TopRatedGames";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <div>
        <Banner></Banner>
        <TopRatedGames></TopRatedGames>
        <CommunityHighlights></CommunityHighlights>
      </div>
    </div>
  );
};

export default Home;
