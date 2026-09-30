function ExpenseItem({ expense, index, onDeleteExpense }) {
  function handleDeleteExpense() {
    console.log("Delete clicked, index:", index);
    onDeleteExpense(index);
  }

  return (
    <>
      <div className="exp-box">
        <div className="list-container">
          <span className="title-span"> {expense.title}</span>
          <span className="category-span">{expense.category}</span>
          <span className="amount-span">
            ₦{expense.amount.toLocaleString()}.00
          </span>
          <button className="delete-button" onClick={handleDeleteExpense}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
