import GlobalStyles from './theme/globalStyles'
import cards from './mock'
import { Contador } from './components/Contador';
import { Deck } from './components/Deck';
import { Header } from './components/Header';
import { useState } from 'react';


export default function App() {
  const [contagem, setContagem] = useState(0)

  return (
    <>
      <GlobalStyles />
      
      <Header nome="ZapRecall" src="../assets/logo.png" />
      <Deck cards={cards} contagem={contagem} setContagem={setContagem}/>
      <Contador contagem={contagem} />
    </>
  );
}