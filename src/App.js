import { db } from "./firebaseConnection";
import './app.css'
import { useState, useEffect, cloneElement } from "react";
import { doc, setDoc, collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot} from "firebase/firestore";

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [idPost, setIdPost] = useState('');
 
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPosts = [];
      snapshot.forEach((doc) => {
        listaPosts.push({
          id: doc.id,
          autor: doc.data().autor,
          titulo: doc.data().titulo
        })
      })
      setPosts(listaPosts);
      })
    }

    loadPosts();
  }, [])

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
    // const postRef = doc(db, "posts", "12345");
    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setAutor(snapshot.data().autor);
    //   setTitulo(snapshot.data().titulo)
    // })
    // .catch((error) => {
    //   console.log("Gerou erro " + error)
    // })

    const postRef = collection(db, "posts");
    await getDocs(postRef)
    .then((snapshot) => {
      let lista = [];
      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          autor: doc.data().autor,
          titulo: doc.data().titulo
        })
      })
      setPosts(lista);
    })

  }

  async function handleEdit() {
    const docRef = doc(db, "posts", idPost);
    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor
    })
    .then(() => {
      console.log("Post atualizado!");
      setIdPost('');
      setAutor('');
      setTitulo('');
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function handleDelete(id) {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() => {
      alert("Post deletado com sucesso!")
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <div className="container">
        <h1>React Js + Firebase</h1>

      <label>Id Post:</label>
      <input type="text" placeholder="Digite o Id do post" value={idPost} onChange={((e) => setIdPost(e.target.value))}/>

        <label>Titulo: </label>
        <textarea type="text" placeholder="Digite o titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>


        <label>Autor:</label>
        <input type="text" placeholder="Autor do post" value={autor} onChange={(e) => setAutor(e.target.value)}/>

        <button onClick={handleAdd}>Cadastrar</button>
        <button onClick={handleSearch}>Buscar post</button>
        <button onClick={handleEdit}>Editar post</button>

        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <span>Id: <strong>{post.id}</strong></span> <br />
                <span>Autor: {post.autor}</span> <br />
                <span>Titulo: {post.titulo}</span> <br />
                <button onClick={() => handleDelete(post.id)}>Excluir</button> <br /> <br />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
