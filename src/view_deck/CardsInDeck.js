import React from "react";
import { deleteCard } from "../utils/api";

function CardsInDeck({ card, navigate, deckId }) {
  const handleDelete = async () => {
    const result = window.confirm("Delete this Card?");
    if (result) {
      await deleteCard(card.id);
      window.location.reload();
    }
  };

  return (
    <div className="col-lg-4  mb-1">
      <div className="card d-flex bg-secondary ">
      <div className="card-body">
        <div className="d-flex flex-column justify-content-between">
          <p className="card-text">
            Front <br></br>
            {card.front}
          </p>
          <p className="card-text">
            Back <br></br>
            {card.back}
          </p>
        </div>
        <div className="mt-1 d-flex flex-row justify-content-center justify-content-lg-end">
          <button
            onClick={() =>
              navigate(`/decks/${deckId}/cards/${card.id}/edit`)
            }
            className="mr-2 btn btn-secondary"
          >
            Edit
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default CardsInDeck;
