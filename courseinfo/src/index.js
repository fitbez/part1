import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = props => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = props => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

const Content = () => {
  return (
    <div>
      <Part part1="Half Stack application development" exercises1="10" />
      <Part part2="Using props to pass data" exercises2="7" />
      <Part part3="State of a component" exercises3="14" />
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  );
};

const App = props => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
