import React from "react";
import data from "./CardData";
import CardDesign from "./CardDesign";

const CardDetails = () => {
  return (
    <>
      {data.map((data) => {
        return (
          <>
            <CardDesign
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </>
        );
      })}
    </>
  );
};

export default CardDetails;
