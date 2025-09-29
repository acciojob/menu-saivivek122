import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css"; 
 
const allDishes = [
  {
    id: 1,
    name: "Pancakes",
    category: "breakfast",
    price: "$5.99",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Omelette",
    category: "breakfast",
    price: "$4.50",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Burger",
    category: "lunch",
    price: "$8.99",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Grilled Sandwich",
    category: "lunch",
    price: "$6.50",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Strawberry Shake",
    category: "shakes",
    price: "$3.99",
    img: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Chocolate Shake",
    category: "shakes",
    price: "$4.25",
    img: "https://via.placeholder.com/100",
  },
];

const App = () => {
  const [dishes, setDishes] = useState(allDishes);
  const [category, setCategory] = useState("all");

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "all") {
      setDishes(allDishes);
    } else {
      setDishes(allDishes.filter((dish) => dish.category === cat));
    }
  };

  return (
    <div id="main">
      <h1 className="title">Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => handleFilter("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => handleFilter("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => handleFilter("shakes")}>
          Shakes
        </button>
        <button id="filter-btn-all" onClick={() => handleFilter("all")}>
          All
        </button>
      </div>
      <Menu dishes={dishes} />
    </div>
  );
};

export default App;
