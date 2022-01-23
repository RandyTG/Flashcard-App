import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { readDeck, updateCard, readCard } from "../utils/api";
import CardForm from "../utils/forms/CardForm";

function EditCard({ setError, create, setCreate }) {
  setCreate(false);
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState([]);
  const { deckId, cardId } = useParams();
  let navigate = useNavigate();
  setCreate(false);

  useEffect(() => {
    const abortController = new AbortController();
    readCard(cardId).then(setCard).catch(setError);
    return () => abortController.abort();
  }, [cardId]);

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    updateCard(card).then(navigate(`/decks/${deckId}`));
  };

  return (
    <CardForm
      deckId={deckId}
      create={create}
      handleSumbit={handleSumbit}
      handleChange={handleChange}
      deck={deck}
      navigate={navigate}
      initialFormState={card}
    />
  );
}

export default EditCard;
