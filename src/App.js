import { db } from "./firebaseConnection";
import './app.css'
import { useState } from "react";
import { doc, setDoc, collection, addDoc, getDoc} from "firebase/firestore";

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  async function handleAdd() {
    // await setDoc(doc(db, "posts", "12345"), {
    //   titulo: titulo,
    //   autor: autor,
    // })
    // .then(() => {
    //   console.log("Dados registrados no banco!")
    // })
    // .catch((error) => {
    //   console.log("Gerou erro " + error)
    // })

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
    .then(() => {
      console.log("Dados registrados no banco!");
      setAutor('');
      setTitulo('');
    })
    .catch((error) => {
      console.log("Gerou erro " + error)
    })
  }


  async function handleSearch() {
    const postRef = doc(db, "posts", "12345");
    await getDoc(postRef)
    .then((snapshot) => {
      setAutor(snapshot.data().autor);
      setTitulo(snapshot.data().titulo)
    })
    .catch((error) => {
      console.log("Gerou erro " + error)
    })
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
        <button onClick={handleSearch}>Buscar post</button>
      </div>
    </div>
  );
}

export default App;
