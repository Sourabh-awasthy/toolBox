import React, { useState } from "react";
import NewItem from "./newItem";
import { Link } from "react-router-dom";

function List() {
  const [inputText, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newEntry = event.target.value;
    setInput(newEntry);
  }
  function addEntry() {
    setItems([...items, inputText]);
    setInput("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={addEntry}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <NewItem
                text={item}
                key={index}
                id={index}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default List;
