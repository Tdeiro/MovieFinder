import { Button, Input, Stack } from "@mui/material";
import { useState } from "react";

export const InputBar = () => {
  const [search, setSearch] = useState("");

  const onSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleSearch = (event: any) => {
    event.preventDefault();

    console.log(search);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Input onChange={onSearch} type="text" />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Stack>
  );
};
