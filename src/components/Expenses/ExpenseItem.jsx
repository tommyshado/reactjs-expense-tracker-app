import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // setTitle() is just a function that updates the title variable
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!!");
  };

  return (
    <>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item_description">
        <h2>{title}</h2>
        <div className="expense-item_price">R{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
    </>
  );
};

export default ExpenseItem;
