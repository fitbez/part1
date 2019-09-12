import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  // console.log(props)
  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

const App = props => {
  // Save clicks of each button to own state
  console.log(props);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const sumAverage = good * 1 + neutral * 0 + bad * -1;
  let average;
  let positive;

  if (sumAverage === 0 && all === 0) {
    average = 0;
    positive = 0;
  } else {
    average = sumAverage / all;
    positive = (good / all) * 100;
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
