import React from "react";

function CardForm({
  deckId,
  create,
  handleSumbit,
  handleChange,
  deck,
  history,
  initialFormState,
}) {
  return (
    <main>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href={`/decks/${deckId}`}>{deck.name}</a>
          </li>
          <li className="breadcrumb-item active " aria-current="page">
            {create ? "Add Card" : "Edit Card"}
          </li>
        </ol>
      </nav>
      <div>
        <h2>{create ? "Add Card" : "Edit Card"}</h2>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              required
              name="front"
              className="form-control"
              id="front"
              rows="3"
              placeholder="Front side of Card"
              onChange={handleChange}
              value={initialFormState.front}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea
              required
              name="back"
              className="form-control"
              id="back"
              rows="3"
              placeholder="Back side of Card"
              onChange={handleChange}
              value={initialFormState.back}
            ></textarea>
          </div>
          <button
            onClick={() => history.push(`/decks/${deckId}`)}
            className="mr-2 btn btn-secondary"
          >
            {create ? "Done" : "Cancel"}
          </button>
          <button type="submit" className="mr-2 btn btn-primary">
            {create ? "Save" : "Submit"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default CardForm;
