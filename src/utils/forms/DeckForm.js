import React from "react";

function DeckForm({
  deckId,
  create,
  handleSumbit,
  handleChange,
  initialFormState,
  navigate,
  deck,
}) {
  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          {create ? null : (
            <li className="breadcrumb-item">
              <a href={`/decks/${deckId}`}>{deck.name}</a>
            </li>
          )}
          <li className="breadcrumb-item active " aria-current="page">
            {create ? "Create Deck" : "Edit Deck"}
          </li>
        </ol>
      </nav>
      <div>
        <h2>{create ? "Create Deck" : "Edit Deck"}</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              required
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Deck Name"
              onChange={handleChange}
              value={initialFormState.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              className="form-control"
              id="description"
              rows="3"
              placeholder="Brief description of the deck"
              onChange={handleChange}
              value={initialFormState.description}
            ></textarea>
          </div>
          <button
            onClick={() =>
              create ? navigate(`/`) : navigate(`/decks/${deckId}`)
            }
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

export default DeckForm;
