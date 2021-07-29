import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "../utils/forms/DeckForm";

function EditDeck({ setError, create, setCreate }) {
  setCreate(false);
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  const history = useHistory();
  const initialFormSate = {
    name: `${deck.name}`,
    description: `${deck.description}`,
  };

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    updateDeck(deck).then(history.push(`/decks/${deckId}`));
  };

  return (
    <DeckForm
      deckId={deckId}
      create={create}
      handleSumbit={handleSumbit}
      handleChange={handleChange}
      history={history}
      initialFormState={deck}
      deck={deck}
    />
  );
}

export default EditDeck;
