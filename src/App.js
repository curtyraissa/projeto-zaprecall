import GlobalStyles from './theme/globalStyles'
import { Contador } from './components/Contador';
import { Deck } from './components/Deck';
import { Header } from './components/Header';

export default function App() {
  return (
    <>
      <GlobalStyles />
      
      <Header nome="ZapRecall" src="../assets/logo.png" />
      <Deck />
      <Contador />
    </>
  );
}