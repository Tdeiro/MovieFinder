import { NowPlayingMoviesUI } from "../components/categories/NowPlayingUI";
import { PopularMoviesUI } from "../components/categories/PopularMoviesUI";
import { TopRatedMoviesUI } from "../components/categories/TopRatedMoviesUI";
import { UpcomingMoviesUI } from "../components/categories/UpcomingMoviesUI";

export const MainPage = () => {
  return (
    <>
      <PopularMoviesUI />
      <UpcomingMoviesUI />
      <TopRatedMoviesUI />
      <NowPlayingMoviesUI />
    </>
  );
};
