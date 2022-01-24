import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "../utils/forms/DeckForm";

function EditDeck({ setError, create, setCreate }) {
  setCreate(false);
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  let navigate = useNavigate();
  const initialFormSate = {
    name: `${deck.name}`,
    description: `${deck.description}`,
  };
  setCreate(false);
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
    updateDeck(deck).then(navigate(`/decks/${deckId}`));
  };

  return (
    <DeckForm
      deckId={deckId}
      create={create}
      handleSumbit={handleSumbit}
      handleChange={handleChange}
      navigate={navigate}
      initialFormState={deck}
      deck={deck}
    />
  );
}

export default EditDeck;
