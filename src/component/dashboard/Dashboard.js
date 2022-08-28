import React from "react";
import CardsData from "../cards/CardsData";
import SearchBar from "../navbar/SearchBar"

const Dashboard = () => {
  return (
    <>
      <SearchBar />
      <CardsData />
    </>
  );
};

export default Dashboard;
