import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { readDeck } from "../utils/api";
import { createCard } from "../utils/api";
import CardForm from "../utils/forms/CardForm";

function CreateNewCard({ setError, create, setCreate }) {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();
  let navigate = useNavigate();
  setCreate(true);
  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId).then(setDeck).catch(setError);
    return () => abortController.abort();
  }, [deckId]);

  const initialFormState = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    createCard(deckId, formData).then(setFormData({ ...initialFormState }));
  };

  return (
    <CardForm
      deckId={deckId}
      create={create}
      handleSumbit={handleSumbit}
      handleChange={handleChange}
      deck={deck}
      navigate={navigate}
      initialFormState={formData}
    />
  );
}

export default CreateNewCard;
