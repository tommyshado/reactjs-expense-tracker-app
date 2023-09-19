const ExpenseForm = () => {
    return (
        <form>
            <div>
                <div>
                    <label>Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" step="0.01" />
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" min="2022-01-01" max="2023-12-30" />
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;