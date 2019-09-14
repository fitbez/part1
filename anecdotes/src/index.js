import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(
    new Array(6 + 1)
      .join("0")
      .split("")
      .map(parseFloat)
  );

  const handlePoints = () => {
    const copy = [...points];
    setPoints(copy, (copy[selected] += 1));
    // console.log(points);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handlePoints}>vote</button>
      <button
        onClick={() => {
          const random =
            anecdotes[Math.floor(Math.random() * anecdotes.length)];
          setSelected(anecdotes.indexOf(random));
        }}
      >
        next anecdote
      </button>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code account for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definintion, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
