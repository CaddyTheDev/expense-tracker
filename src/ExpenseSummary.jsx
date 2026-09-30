import { useState } from "react";

function ExpenseSummary({ expenses }) {
  let total = 0;
  for (const exp of expenses) {
    total += Number(exp.amount);
  }
  const isOverBudget = total > 50000;

  return (
    <div className="expense-summary">
      <span className="total-label">Total Expenses</span>
      <span className="amount-label">₦{total.toLocaleString()} </span>

      {isOverBudget && (
        <div className="warning-message">
          Warning:⚠️ You've exceeded your ₦50,000 budget!!!
        </div>
      )}
    </div>
  );
}
export default ExpenseSummary;
