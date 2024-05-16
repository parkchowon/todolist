import Header from "./components/Header";
import ListContainer from "./components/ListContainer";
import "./styles/App.css";

function App() {
  return (
    <div className="main-container">
      <Header />
      <ListContainer title="Working" isDone={false} />
      <ListContainer title="Done" isDone={true} />
    </div>
  );
}

export default App;
