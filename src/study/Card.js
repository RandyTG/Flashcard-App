import React from "react";
import { useHistory } from "react-router-dom";

function Card({
  cards,
  card,
  index,
  flip,
  setCurrentCard,
  setFlip,
  currentCard,
}) {
  const history = useHistory();
  const handleFlip = () => setFlip(!flip);
  const handleNext = () => {
    setFlip(false);
    setCurrentCard((prevCard) => prevCard + 1);
    if (currentCard === cards.length - 1 && flip) {
      const result = window.confirm("Restart Cards");
      if (result) {
        window.location.reload();
      } else {
        history.push("/");
      }
    }
  };

  return (
    <div className="card w-75">
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <h5 className="card-title">
            Card {index + 1} of {cards.length}
          </h5>
        </div>
        <p className="card-text">{flip ? card.back : card.front}</p>
        <button onClick={handleFlip} className="mr-2 btn btn-secondary">
          Flip
        </button>
        {flip ? (
          <button onClick={handleNext} className="btn btn-primary">
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
