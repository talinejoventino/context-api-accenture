import './App.css';
import ComponentChild from './components/ComponentChild';
import { useToggle } from './contexts/ToggleProvider';

function App() {
  const {estadoPai, handleClickEstadoPai} = useToggle()
  return (
    <div >
      <div>
        <h1>Componente Pai</h1>
        <button onClick={handleClickEstadoPai} >Clique aqui sou o pai</button>
        {estadoPai&&<p>Aberto!</p>}
        <ComponentChild/>
      </div>
    </div>
  );
}

export default App;
