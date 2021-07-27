import React, {useState, useEffect} from "react";
import { useHistory } from "react-router";
import { listDecks } from "../utils/api";
import Deck from "./Deck";


function DeckList() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined)
  const history = useHistory();

  useEffect(()=> {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, []);

  const deckList = decks.map(deck => <Deck key={deck.id} deck={deck}/>)

  return (
    <div>
      <button onClick={()=> history.push("/decks/new") } type="button" className="mb-2 btn btn-secondary">Create Deck</button>
      <section>{deckList}</section>
    </div>
  )
}

export default DeckList;
