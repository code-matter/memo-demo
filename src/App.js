import { useEffect, useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);

  const fetchNames = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${count}`);
      const data = await res.json();
      setData(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchNames();

    return () => {
      setData(null);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data && <h2>Pokemon in Parent: {data && data.name}</h2>}
        <button onClick={fetchNames}>Fetch Names</button>
        <button onClick={() => setCount(count + 1)}>++</button>
        Count:{count}
        <Child data={data} />
      </header>
    </div>
  );
}

export default App;
