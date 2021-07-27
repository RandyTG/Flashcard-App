import React from "react";
import { deleteDeck } from "../utils/api";


function Deck() {
  return (
    <div class="card w-75">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a  href="#" class="btn btn-secondary">
          Button
        </a>
        <a href="#" class="btn btn-primary">
          Button
        </a>
        <a href="#" class="btn btn-danger">
          Button
        </a>
      </div>
    </div>
  );
}
export default Deck;
