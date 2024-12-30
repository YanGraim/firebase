import { db } from "./firebaseConnection";
import './app.css'
import { useState } from "react";

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  function handleAdd() {
    alert("Teste")
  }

  return (
    <div>
      <div className="container">
        <h1>React Js + Firebase</h1>
        <label>Titulo: </label>
        <textarea type="text" placeholder="Digite o titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>


        <label>Autor:</label>
        <input type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)}/>

        <button onClick={handleAdd}>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
