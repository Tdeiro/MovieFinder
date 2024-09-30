import { MovieInfoUI } from "./components/categories/MovieInfoUI";
import { MovieSearchResultUI } from "./components/categories/MovieSearchResultUI";
import { InputBar } from "./components/share/sharedComponents/SearchBar";
import { MainPage } from "./pages/MainPage";
import { createBrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const movieId = "123";

  return (
    <>
      <h1>Movie Finder</h1>
      <InputBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/result/:id" element={<MovieInfoUI />} />
        <Route path="/movie/search/:query" element={<MovieSearchResultUI />} />
      </Routes>
    </>
  );
};

export default App;
