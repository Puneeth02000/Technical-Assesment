
import React from "react";
import SearchBar from "./searchbar.jsx";
import SelectUser from "./searchbar2.jsx";

const Main = () => {
  const items = ["Games", "eSports", "TalkShows", "Popular Shows"];
  const items2 ='https://reqres.in/api/users?page=2'

  return (
    <div>
      <SearchBar items={items} />
      {/* <SelectUser items2={items2} /> */}
    </div>
  );
};

export default Main;
