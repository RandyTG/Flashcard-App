import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../home/DeckList";
import StudyDeck from "../study/StudyDeck";
import CreateNewDeck from "../create/CreateNewDeck";
import CreateNewCard from "../create/CreateNewCard";
import ViewDeck from "../view_deck/ViewDeck";
import EditDeck from "../edit/EditDeck";
import EditCard from "../edit/EditCard";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [create, setCreate] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<DeckList decks={decks} />} />
          <Route path="/decks/new" element={
            <CreateNewDeck
              decks={decks}
              create={create}
              setCreate={setCreate}
            />
          }/>
          <Route path="/decks/:deckId/cards/new" element={
            <CreateNewCard
              setError={setError}
              create={create}
              setCreate={setCreate}
            />
          }/>
          <Route path="/decks/:deckId/cards/:cardId/edit" element={
            <EditCard
              setError={setError}
              create={create}
              setCreate={setCreate}
            />
          }/>
          <Route path="/decks/:deckId/edit" element={
            <EditDeck
              setError={setError}
              create={create}
              setCreate={setCreate}
            />
          }/>
          <Route path="/decks/:deckId/study" element={<StudyDeck setError={setError} />} />
          <Route path="/decks/:deckId" element={<ViewDeck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
