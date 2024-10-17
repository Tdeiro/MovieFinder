import { NowPlayingMoviesUI } from "../components/categories/NowPlayingUI";
import { PopularMoviesUI } from "../components/categories/PopularMoviesUI";
import { TopRatedMoviesUI } from "../components/categories/TopRatedMoviesUI";
import { UpcomingMoviesUI } from "../components/categories/UpcomingMoviesUI";

import "./MainPage.css";
import { useAuthUser } from "../firebase/authUser";

export const MainPage = () => {
  const currentUser = useAuthUser();

  return (
    <>
      {currentUser ? currentUser.email : null}
      <PopularMoviesUI />
      <UpcomingMoviesUI />
      <TopRatedMoviesUI />
      <NowPlayingMoviesUI />
    </>
  );
};
