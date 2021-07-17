import { useToggle } from "../contexts/ToggleProvider";

function ComponentChild(){
    const {estadoFilho, handleClickEstadoFilho} = useToggle()
  return (
    <div >
      <div>
        <h1>Componente Filho</h1>
        <button onClick={handleClickEstadoFilho} >Clique aqui sou o filho</button>
        {estadoFilho&&<p>Aberto!</p>}
      </div>
    </div>
  );
}

export default ComponentChild
