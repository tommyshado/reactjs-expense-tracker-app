import { useState } from "react";


const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                dateChangeHandler: new Date(event.target.value)
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = userInput;

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2023-12-30" onChange={dateChangeHandler} />
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;