import "./App.css";
import Message from "./Message";

const Description = () => {
  return <p>Esta es la app del curso fullstack bootcamp</p>;
};

function App() {
  return (
    <div className="App">
      <Message color="red" message="Estamos trabajando"></Message>
      <Message color="green" message="En un curso"></Message>
      <Message color="blue" message="De React"></Message>
      <Description></Description>
    </div>
  );
}

export default App;
