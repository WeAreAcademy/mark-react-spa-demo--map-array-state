import { useState } from "react";

function App() {
  const [sequence, setSequence] = useState([1, 1]);

  const handleAddNext = () =>
    setSequence((prevSequence) => {
      const lastNumber = prevSequence[prevSequence.length - 1];
      const lastButOne = prevSequence[prevSequence.length - 2];
      return [...prevSequence, lastButOne + lastNumber];
    });

  return (
    <div>
      <h1>Fibbonaci</h1>
      <button onClick={handleAddNext}>Next number</button>
      <ul>
        {sequence.map((val, idx) => (
          // index is okay as key here because position in sequence is necessarily stable, so it is a stable unique identifier
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
