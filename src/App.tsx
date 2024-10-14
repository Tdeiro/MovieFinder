import { MovieInfoUI } from "./components/categories/MovieInfoUI";
import { MovieSearchResultUI } from "./components/categories/MovieSearchResultUI";
import { InputBar } from "./components/share/sharedComponents/SearchBar";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { createBrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const movieId = "123";

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/movie/result/:id" element={<MovieInfoUI />} />
        <Route path="/movie/search/:query" element={<MovieSearchResultUI />} />
      </Routes>
    </>
  );
};

export default App;
