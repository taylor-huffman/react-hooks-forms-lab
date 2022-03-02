import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('')
  const [itemCategory, setItemCategory] = useState('Produce')
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  }

  function handleSetItemName(event) {
    console.log(event.target.value)
    setItemName(event.target.value)
  }

  function handleSetItemCategory(event) {
    console.log(event.target.value)
    setItemCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(newItem)
    onItemFormSubmit(newItem)
    setItemName('')
    setItemCategory('Produce')  
  }


  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleSetItemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSetItemCategory}>
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
