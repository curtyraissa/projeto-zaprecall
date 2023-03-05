import styled from "styled-components"
import { Flashcards } from "./Flashcards"
import { Header } from "./Header"

export const Deck = () => {
    return (
      <ContainerDeck>
        <Flashcards/>
        <Flashcards/>
        <Flashcards/>
        <Flashcards/>
        <Flashcards/>
        <Flashcards/>
        <Flashcards/>
        <Flashcards/>
      </ContainerDeck>
    )
  }

const ContainerDeck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 25px;
  padding: 5 35px;
  overflow-y: scroll;
  margin-top: 100px;
  margin-bottom: 75px;
`