import React from "react";
import Form from "./components/Form";


const App = () => {
  // estado que recebr dados e mostrar na tela
  const [dados, setDados] = React.useState(null);

  async function handleClick({ target }) {
    const produtoResponse = await fetch("http://testereact.infinityfreeapp.com/");
    const produtoJson = await produtoResponse.json();
    console.log(produtoJson);
    setDados(produtoJson)
  }
  
  return (
    <div>
      <button onClick={handleClick}>Smartphone</button>

      <button onClick={handleClick}>Notebook</button>

      <Form />

       {/* {dados && <Noticia dados={dados} />}  */}
    </div>
  );
};

export default App;
