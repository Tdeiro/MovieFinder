import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { useAuthUser } from "../../../firebase/authUser";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const hasUser = useAuthUser();
  const navigate = useNavigate();

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    navigate(`/movie/search/${search}`);
    console.log(search);
  };

  const handleLogOut = () => {
    signOut(auth);
  };

  return (
    <Stack className="search-bar" direction="row" spacing={5}>
      <h1>Movie Finder</h1>
      <Input onChange={onSearch} type="text" />
      <div className="search-bar-button">
        <button onClick={handleSearch}>
        Search
      </button>
      </div>
      {hasUser ? (
        <button onClick={handleLogOut}>
          Log out
        </button>
      ) : null}
    </Stack>
  );
};
