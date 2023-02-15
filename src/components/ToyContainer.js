import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDonateItem, onLikeItem }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => {
        return <ToyCard toy={toy} key={toy.id} onDonateItem={onDonateItem} onLikeItem={onLikeItem}/>;
      })}
    </div>
  );
}

export default ToyContainer;
