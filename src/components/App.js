import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  function handleAddItem(newToy) {
    const updatedToys = [...toys, newToy];
    setToys(updatedToys);
  }

  function handleDonateItem(donatedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== donatedToy.id);
    setToys(updatedToys);
  }

  function handleLikeItem(likedToy) {
    const updatedToys = toys.map((toy) => {
      if (toy.id === likedToy.id) {
        return likedToy;
      } else {
        return toy;
      }
    });
    setToys(updatedToys);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddItem={handleAddItem} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonateItem={handleDonateItem} onLikeItem={handleLikeItem}/>
    </>
  );
}

export default App;
