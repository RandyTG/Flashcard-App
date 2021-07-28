import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateNewDeck({ decks }) {
  const history = useHistory();
  const initialFormSate = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormSate });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(formData);
    createDeck(formData)
      .then(setFormData({ ...initialFormSate }))
      .then(history.push(`/decks/${decks.length + 1}`));
  };

  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <div>
        <h2>Create Deck</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label for="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Deck Name"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="form-group">
            <label for="description">Description</label>
            <textarea
              name="description"
              className="form-control"
              id="description"
              rows="3"
              placeholder="Brief description of the deck"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            onClick={() => history.push(`/`)}
            className="mr-2 btn btn-secondary"
          >
            Cancel
          </button>
          <button type="submit" className="mr-2 btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
export default CreateNewDeck;
