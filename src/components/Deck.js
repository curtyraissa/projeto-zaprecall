import { useState } from "react"
import styled from "styled-components"
import { Flashcards } from "./Flashcards"

export const Deck = ({ cards, contagem, setContagem }) => {
  const [selecionado, setSelecionado] = useState([])

  return (
    <ContainerDeck>
      {cards.map((item, i) => {
        return (
          <Flashcards
            key={i}
            index={i + 1}
            pergunta={item.question}
            resposta={item.answer}
            selecionado={selecionado}
            setSelecionado={setSelecionado} 
            contagem={contagem}
            setContagem={setContagem}
          />
        )
      })}
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