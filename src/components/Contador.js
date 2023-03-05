import styled from "styled-components"

export const Contador = () => {
  return (
    <ContainerContador>
      <p>0/4 concluído</p>
    </ContainerContador>
  )
}

const ContainerContador = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #FFFFFF;
  height: 70px;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    text-transform: uppercase;
  }
`