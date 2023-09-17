import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">R{props.amount}</div>
      </div>
    </Card>
    </>
  );
};

export default ExpenseItem;
