import { db } from "./firebaseConnection";

function App() {

  function handleAdd() {
    alert("Teste")
  }

  return (
    <div>
      <h1>React Js + Firebase</h1>

      <div className="container">
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
