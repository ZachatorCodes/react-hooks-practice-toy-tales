import React from "react";

function ToyCard({ toy, onDonateItem, onLikeItem }) {
  const { name, image, likes } = toy;

  function handleDonateClick() {
    console.log("Deleting...");
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDonateItem(toy));
  }

  function handleLikeClick() {
    console.log("Liking...");
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1,
      }),
    })
      .then((r) => r.json())
      .then((likedToy) => {
        onLikeItem(likedToy);
      });
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDonateClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
