import { NowPlayingMoviesUI } from "../components/categories/NowPlayingUI";
import { PopularMoviesUI } from "../components/categories/PopularMoviesUI";
import { TopRatedMoviesUI } from "../components/categories/TopRatedMoviesUI";
import { UpcomingMoviesUI } from "../components/categories/UpcomingMoviesUI";
import { InputBar } from "../components/share/sharedComponents/SearchBar";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <>
      <h1>Movie Finder</h1>
      <InputBar />
      <PopularMoviesUI />
      <UpcomingMoviesUI />
      <TopRatedMoviesUI />
      <NowPlayingMoviesUI />
    </>
  );
};
