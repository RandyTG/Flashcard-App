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
    <div className="mb-2 col-11 col-lg-4 mb-lg-4">
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="mb-1">
            <div className="d-flex flex-row justify-content-between">
              <h5 className="card-title">{deck.name}</h5>
              <p className="text-secondary">{deck.cards.length} cards</p>
            </div>
            <p className="card-text">{deck.description}</p>
          </div>
          <div className="d-flex justify-content-center">
            <button
              onClick={() => navigate(`/decks/${deck.id}`)}
              className="mr-2 btn btn-lg btn-secondary"
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
      </div>
    </div>
  );
}
export default Deck;
