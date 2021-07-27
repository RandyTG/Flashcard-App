import React from "react"
import {useParams} from "react-router-dom"

function StudyDeck(){
    const {deckId} = useParams();
 return (
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Library</a></li>
      <li class="breadcrumb-item active" aria-current="page">Study</li>
    </ol>
  </nav>
 )
}

export default StudyDeck;