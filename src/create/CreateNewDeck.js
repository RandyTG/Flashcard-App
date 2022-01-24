import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createDeck } from "../utils/api";
import DeckForm from "../utils/forms/DeckForm";

function CreateNewDeck({ decks, create, setCreate }) {
  let navigate = useNavigate();
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
    navigate(`/decks/${decks.length + 1}`);
  };

  return (
    <DeckForm
      create={create}
      handleSumbit={handleSumbit}
      handleChange={handleChange}
      navigate={navigate}
      initialFormState={formData}
    />
  );
}
export default CreateNewDeck;
