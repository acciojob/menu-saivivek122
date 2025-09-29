import React from "react";
import "./../styles/App.css";

function Menu({ menuItems, handleSort }) {
  return (
    <div>
      <h1 className="heading">Our Menu</h1>
      <nav className="nav-bar">
        <a id="filter-btn-0" onClick={() => handleSort("all")}>
          All
        </a>
        <a id="filter-btn-1" onClick={() => handleSort("breakfast")}>
          Breakfast
        </a>
        <a id="filter-btn-2" onClick={() => handleSort("lunch")}>
          Lunch
        </a>
        <a id="filter-btn-3" onClick={() => handleSort("shakes")}>
          Shakes
        </a>
      </nav>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div className="menu-container" key={item.id}>
            <div className="left">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="right">
              <div className="top">
                <h3>{item.title}</h3>
                <h5>₹{item.price}</h5>
                <h5>{item.category}</h5>
              </div>
              <hr className="line" />
              <div className="bottom">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
