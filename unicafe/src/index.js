import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td> {text}</td>
      <td> {value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  // console.log(props)
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive + "%"} />
      </tbody>
    </table>
  );
};

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const App = props => {
  // Save clicks of each button to own state
  // console.log(props);
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
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
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
