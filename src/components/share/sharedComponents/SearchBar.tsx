import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export const InputBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();
    navigate(`/movie/search/${search}`);
    console.log(search);
  };

  return (
    <Stack className="search-bar" direction="row" spacing={2}>
      <Input onChange={onSearch} type="text" />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Stack>
  );
};
