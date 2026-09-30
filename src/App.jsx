import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(newExpense) {
    setExpenses((prev) => [...prev, newExpense]);
  }

  function handleDelete(index) {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="expense-container">
      <div className="form-container">
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>

      <div className="expense-right">
        <ExpenseSummary expenses={expenses} />
        <ExpenseList expenses={expenses} onDeleteExpense={handleDelete} />
      </div>
    </div>
  );
}

export default App;
