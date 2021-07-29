import React from "react";
import { deleteCard } from "../utils/api";

function CardsInDeck({ card, history, deckId }) {
  const handleDelete = async () => {
    const result = window.confirm("Delete this Card?");
    if (result) {
      await deleteCard(card.id);
      window.location.reload();
    }
  };

  return (
    <div className="card w-77">
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <p className="card-text">{card.front}</p>
          <p className="card-text">{card.back}</p>
        </div>
        <div className="d-flex flex-row justify-content-end">
          <button
            onClick={() =>
              history.push(`/decks/${deckId}/cards/${card.id}/edit`)
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
  );
}

export default CardsInDeck;
