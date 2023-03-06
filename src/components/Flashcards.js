import { useState } from "react"
import styled from "styled-components"

export const Flashcards = ({ index, pergunta, resposta, selecionado, setSelecionado, contagem, setContagem }) => {
  const [verPergunta, setVerPergunta] = useState(false)
  const [verResposta, setVerResposta] = useState(false)
  const [estilo, setEstilo] = useState("")
  const [icone, setIcone] = useState("")
  const iconeInicial = icone === ''
  

  function handleResultado(e, i) {
    setVerPergunta(false)
    setEstilo(e)
    setIcone(i)
    setSelecionado([...selecionado, { estilo: e, icone: i }])
    setContagem(contagem + 1)
  }

  return (
    <>
      {verPergunta === true ? (
        <>
          {verResposta === true ?
            <RespostaFlashcard data-test="flashcard">
              <p data-test="flashcard-text">{resposta}</p>
              <div className="button">
                <button data-test="no-btn" className="nao" onClick={() => handleResultado('vermelho', './assets/icone_erro.png')}>Não lembrei</button>
                <button data-test="partial-btn" className="quase" onClick={() => handleResultado('laranja', './assets/icone_quase.png')}>Quase não lembrei</button>
                <button data-test="zap-btn" className="zap" onClick={() => handleResultado('verde', './assets/icone_certo.png')}>Zap!</button>
              </div>
            </RespostaFlashcard>
            : <PerguntaFlashcard data-test="flashcard">
              <p data-test="flashcard-text">{pergunta}</p>
              <img
                data-test="turn-btn"
                src="./assets/seta_virar.png"
                onClick={() => setVerResposta(true)}
              ></img>
            </PerguntaFlashcard>
          }
        </>
      ) : (
        <ContainerFlashcard data-test="flashcard" onClick={iconeInicial ? () => setVerPergunta(true) : () => false}>
          
          <p data-test="flashcard-text" className={iconeInicial ? '' : `riscado ${estilo}`}>Pergunta {index}</p>
          <img
            data-test="play-btn"
            src={iconeInicial ? './assets/seta_play.png' : icone}
            alt="seta play"
            onClick={() => setVerPergunta(true)}
          ></img>
        </ContainerFlashcard>
      )}
    </>

  )
}

const RespostaFlashcard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }

  button {
    width: 85px;
    height: 38px;
    border-radius: 5px;
    border: none;
    color: #FFFFFF;
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 12px;
  }

  .nao {
    background-color: #FF3030;
  }

  .quase {
    background-color: #FF922E;
  }

  .zap {
    background-color: #2FBE34;
  }

  .virar{
    transform: rotateY(-180deg);
  }
`

const PerguntaFlashcard = styled.div`
  display: flex;
  flex-direction: column;
  width: 299px;
  height: 131px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding: 15px;
  position: relative;

  p {
    font-family: 'Recursive', sans-serif; 
    font-weight: 400;
    font-size: 18px;
    color: #333333;
  }

  img {
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 1;
  }

  .virar{
    transform: rotateY(0deg);
  }
`

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