import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // set item name, set the item category

  function handleItemName(event) {
    setItemName(event.target.value)
    console.log(itemName)
  }

  function handleItemCategory(event) {
    setItemCategory(event.target.value)
    console.log(itemCategory)
  }

  function handleNewItemSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    }
    console.log(newItem)
    onItemFormSubmit(newItem)

  }

  return (
    <form onSubmit={handleNewItemSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleItemName} value={itemName} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleItemCategory} value={itemCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
