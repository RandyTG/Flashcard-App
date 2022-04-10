import React from "react";
import { useNavigate } from "react-router";
import Deck from "./Deck";

function DeckList({ decks }) {
  let navigate = useNavigate();
  const deckList = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => navigate("/decks/new")}
          type="button"
          className="mb-2 btn btn-secondary btn-lg"
        >
          Create Deck
        </button>
      </div>
      <section className="row d-flex flex-column align-items-center flex-lg-row align-items-lg-stretch flex-lg-wrap">
        {deckList}
      </section>
    </div>
  );
}

export default DeckList;
