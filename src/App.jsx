import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="main-container">
      <Header />
      <ListContainer working="Working" isDone={false} />
      <ListContainer working="Done" isDone={true} />
    </div>
  );
}

export default App;
