import React from "react";
import { useNavigate } from "react-router";
import Deck from "./Deck";

function DeckList({ decks }) {
  let navigate = useNavigate();
  const deckList = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

  return (
    <div>
      <button
        onClick={() => navigate("/decks/new")}
        type="button"
        className="mb-2 btn btn-secondary"
      >
        Create Deck
      </button>
      <section>{deckList}</section>
    </div>
  );
}

export default DeckList;
