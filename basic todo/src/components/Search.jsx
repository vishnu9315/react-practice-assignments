import React from "react";

const Search = ({ todos, setTodos, todoValue, setTodoValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { id: generateRandom(), title: todoValue, completed: false }
    ]);
    setTodoValue("");
  };

  const generateRandom = () => {
    const num = Math.floor(Math.random() * 10);
    console.log(num);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="type todo"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button type="submit">Submit </button>
    </form>
  );
};

export default Search;
