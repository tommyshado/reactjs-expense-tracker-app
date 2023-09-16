import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2023, 8, 16);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 250.76;

  return (
    <>
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item_description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item_price">{expenseAmount}</div>
      </div>
    </div>
    </>
  );
};

export default ExpenseItem;
