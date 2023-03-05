import styled from "styled-components"

export const Header = ({nome, src}) => {
    return (
      <ContainerHeader>
          <img src={src} alt={nome}></img>
          <p>{nome}</p>
      </ContainerHeader>
    )
  }

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: #FB6B6B;

  img {
    width: 52px;
    height: 60px;
  }

  p {
    font-family: 'Righteous', cursive;
    font-weight: 400;
    font-size: 36px;
    color: #ffffff;
  }
`