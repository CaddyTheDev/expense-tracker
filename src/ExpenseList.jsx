import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  return expenses.length === 0 ? (
    <span className="no-expenses">No Expenses Yet</span>
  ) : (
    <>
      <h3>Expenses</h3>
      <div className="span-header">
        <span className="header-title">Title</span>
        <span className="header-category">Category</span>
        <span className="header-amount">Amount</span>
        <span className="header-date">Date</span>
        <span className="header-delete"></span>
      </div>

      <div>
        {expenses.map((exp, index) => (
          <ExpenseItem
            index={index}
            key={index}
            expense={exp}
            onDeleteExpense={onDeleteExpense}
          />
        ))}
      </div>
    </>
  );
}

export default ExpenseList;
