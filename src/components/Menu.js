import React from "react";

const Menu = ({ dishes }) => {
  return (
    <div className="menu-list">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="menu-item"
          data-test-id={`menu-item-${dish.category}`}
        >
          <img src={dish.img} alt={dish.name} className="menu-img" />
          <div className="menu-info">
            <h3>{dish.name}</h3>
            <p>{dish.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
