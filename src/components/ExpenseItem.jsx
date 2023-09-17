import "./ExpenseItem.css";

const ExpenseItem = props => {
  return (
    <>
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">R{props.amount}</div>
      </div>
    </div>
    </>
  );
};

export default ExpenseItem;
