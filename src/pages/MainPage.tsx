import { NowPlayingMoviesUI } from "../components/categories/NowPlayingUI";
import { PopularMoviesUI } from "../components/categories/PopularMoviesUI";
import { TopRatedMoviesUI } from "../components/categories/TopRatedMoviesUI";
import { UpcomingMoviesUI } from "../components/categories/UpcomingMoviesUI";
import { InputBar } from "../components/share/sharedComponents/SearchBar";

export const MainPage = () => {
  return (
    <>
      <InputBar />
      <PopularMoviesUI />
      <UpcomingMoviesUI />
      <TopRatedMoviesUI />
      <NowPlayingMoviesUI />
    </>
  );
};
