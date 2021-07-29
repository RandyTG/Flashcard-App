import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "../home/DeckList";
import StudyDeck from "../study/StudyDeck";
import CreateNewDeck from "../create/CreateNewDeck";
import ViewDeck from "../view_deck/ViewDeck";

function Layout() {
  const [deck, setDeck] = useState([]);
  const [decks, setDecks] = useState([]);
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
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} />
          </Route>
          <Route path="/decks/new">
            <CreateNewDeck decks={decks} />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck setError={setError} />
          </Route>
          <Route path="/decks/:deckId">
            <ViewDeck />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
