import Header from "./Components/Header.jsx";
import data from "./data";
import Card from "./Components/Card";

const cards = data.map((item) => <Card key={item.title} {...item} />);

function App() {
  return (
    <div className="App">
      <Header />
      <section className="cards">{cards}</section>
    </div>
  );
}

export default App;
