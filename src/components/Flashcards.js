import styled from "styled-components"

export const Flashcards = () => {
  return (
    <ContainerFlashcard>
      <p>Pergunta 1</p>
      <img src="./assets/seta_play.png" alt="seta play"></img>
    </ContainerFlashcard>
  )
}

const ContainerFlashcard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #ffffff;
  width: 300px;
  height: 65px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 700;
    font-size: 16px;
    color: #333333;
  }

  img {
    width: 20px;
    height: 23px;
  }
`