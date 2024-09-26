import { PopularMoviesUI } from "../components/categories/PopularMoviesUI";
import { UpcomingMoviesUI } from "../components/categories/UpcomingMoviesUI";
import { InputBar } from "../components/share/sharedComponents/SearchBar";

export const MainPage = () => {
  return (
    <>
      <InputBar />
      <PopularMoviesUI />
      <UpcomingMoviesUI />
    </>
  );
};
