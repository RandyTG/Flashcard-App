import React from "react";
import { useHistory } from "react-router";
import Deck from "./Deck";

function DeckList({ decks }) {
  const history = useHistory();
  const deckList = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

  return (
    <div>
      <button
        onClick={() => history.push("/decks/new")}
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
