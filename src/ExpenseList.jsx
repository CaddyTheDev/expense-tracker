import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDeleteExpense }) {
  return expenses.length === 0 ? (
    <span className="no-expenses">No Expenses Yet</span>
  ) : (
    <>
      <h3>Expenses</h3>
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
