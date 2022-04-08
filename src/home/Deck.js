import React from "react";
import { useNavigate } from "react-router";
import { deleteDeck } from "../utils/api";

function Deck({ deck }) {
  let navigate = useNavigate();
  //handles delete button click
  const handleDelete = async () => {
    const result = window.confirm("Delete this Deck?");
    if (result) {
      await deleteDeck(deck.id);
      window.location.reload();
    }
  };
  //returns completed card
  return (
    <div className="card w-75 mb-2">
      <div className="card-body">
        <div className="d-flex flex-row justify-content-between">
          <h5 className="card-title">{deck.name}</h5>
          <p className="text-secondary">{deck.cards.length} cards</p>
        </div>
        <p className="card-text">{deck.description}</p>
        <button
          onClick={() => navigate(`/decks/${deck.id}`)}
          className="mr-2 btn btn-secondary"
        >
          View
        </button>
        <button
          onClick={() => navigate(`/decks/${deck.id}/study`)}
          className="btn btn-primary"
        >
          Study
        </button>
        <button onClick={handleDelete} className="float-right btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Deck;
