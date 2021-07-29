import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import DeckForm from "../utils/forms/DeckForm";

function CreateNewDeck({ decks, create, setCreate }) {
  setCreate(true);
  const history = useHistory();
  const initialFormState = {
    name: "",
    description: "",
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
    createDeck(formData)
      .then(setFormData({ ...initialFormState }))
      .then(history.push(`/decks/${decks.length + 1}`));
  };

  return (
    <DeckForm
      create={create}
      handleSumbit={handleSumbit}
      handleChange={handleChange}
      history={history}
      initialFormState={formData}
    />
  );
}
export default CreateNewDeck;
