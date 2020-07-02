import React from "react";
import Card from "./card";
import { robo } from "./robo";

const CardList = () => {
  return (
    <div>
      {robo.map((user, i) => {
        return (
          <Card
            key={i}
            id={robo[i].id}
            name={robo[i].name}
            email={robo[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
