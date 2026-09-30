import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleAmountChange(event) {
    setAmount(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (title === "" || amount === "" || category === "") {
      return;
    }
    console.log({ title, amount, category, date });

    onAddExpense({ title, amount, category, date });
    setTitle("");
    setAmount("");
    setCategory("");
    setDate(new Date().toISOString().slice(0, 10));
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <p>Expense Tracker</p>
      <label>Title</label>
      <input
        type="text"
        value={title}
        placeholder="Expense"
        onChange={handleTitleChange}
      />
      <br />

      <label>Amount</label>
      <input
        type="number"
        value={amount}
        placeholder="Expense amount"
        onChange={handleAmountChange}
      />

      <label>Category</label>
      <select
        className="category-select"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Purchases">Purchases</option>
        <option value="Groceries">Groceries</option>
        <option value="Electricity">Electricity</option>
        <option value="Water bill">Water bill</option>
        <option value="Miscellanous">Miscellanous</option>
        <option value="Subscriptions">Subscriptions</option>
      </select>

      <label>Date</label>
      <input type="date" value={date} onChange={handleDateChange} />

      <button type="submit" className="add-expense">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
