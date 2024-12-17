import { MovieInfoUI } from "./components/categories/MovieInfoUI";
import { MovieSearchResultUI } from "./components/categories/MovieSearchResultUI";
import { SearchBar } from "./components/share/sharedComponents/SearchBar";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { RegisterPage } from "./pages/RegisterPage";
import {Route, Routes } from "react-router-dom";
import { UserWatchlist } from "./pages/UserWatchlist";
import "./global.css";

const App = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movie/watchlist" element={<UserWatchlist />} /> 
        <Route path="/movie/result/:id" element={<MovieInfoUI />} />
        <Route path="/movie/search/:query" element={<MovieSearchResultUI />} />
      </Routes>
    </>
  );
};

export default App;
