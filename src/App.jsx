import postDiagram from "./services/DiagramService";
import "./App.css";

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postDiagram(e.target.text.value);
    console.log(result);
    e.target.reset();
  };

  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <p>Texto aqui:</p>
        <textarea name="text" id="text"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
