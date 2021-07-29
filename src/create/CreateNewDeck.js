import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import DeckForm from "../utils/forms/DeckForm";

function CreateNewDeck({ decks, create, setCreate }) {
  const history = useHistory();
  const initialFormState = {
    name: "",
    description: "",
  };
  setCreate(true);
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    await createDeck(formData).then(setFormData({ ...initialFormState }));
    history.push(`/decks/${decks.length + 1}`);
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
