import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(searchTerm) {
    setSearch(searchTerm);
    // console.log(searchTerm);
  }

  // const itemsToDisplay = items
  //   .filter((item) => selectedCategory === "All") 
  //   .filter((item) => item.name.includes(search))

  const itemsToDisplay = items.filter((item) => {
    if (search === "") {
      return true
    }
    return item.name.includes(search)


  })
    .filter((item) => {
      if (selectedCategory === "All") {
        return true;
      }
      return item.category === selectedCategory
    })



  // && items.filter((item) => item.name.includes(search))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
