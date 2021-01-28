import React from "react";

const Form = () => {
  const [form, setForm] = React.useState({
    titlepost: "",
    categoria: "",
  });
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log(JSON.stringify(form));
  }

  // enviando nossos dados para a API
  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:1910/noticia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Transformando nosso dado em JSON
      body: JSON.stringify(form),
    }).then((res) => {
      setResponse(res);
    });
    window.location.reload(false)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titlepost">Titulo</label>
        <input
          type="text"
          name="titlepost"
          id="titlepost"
          value={form.titlepost}
          onChange={handleChange}
        />

        <label htmlFor="titlepost">Categoria</label>
        <input
          type="text"
          name="categoria"
          id="categoria"
          value={form.categoria}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {response && response.ok && <p> Formulario Enviado </p>}

    </div>
  );
};

export default Form;
