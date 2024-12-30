import { db } from "./firebaseConnection";
import './app.css'

function App() {

  function handleAdd() {
    alert("Teste")
  }

  return (
    <div>

      <div className="container">
        <h1>React Js + Firebase</h1>
        <label>Titulo: </label>
        <textarea type="text" placeholder="Digite o titulo"/>


        <label>Autor:</label>
        <input type="text" placeholder="Autor do post" />

        <button onClick={handleAdd}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
