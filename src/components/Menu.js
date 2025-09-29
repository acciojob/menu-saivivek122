import React from "react";
import "./styles.css";
function Menu(props) {
  const menuItems = props.menuItems;
  const handleSort = props.handleSort;

  return (
    <div>
      <h1 className="heading">Our Menu</h1>
      <nav className="nav-bar">
        <a onClick={()=>handleSort("all")}>All</a>
        <a onClick={() => handleSort("breakfast")}>Breakfast</a>
        <a onClick={()=>handleSort("lunch")}>Lunch</a>
        <a onClick={()=>handleSort("shakes")}>Shakes</a>
      </nav>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div className="menu-container" key={index}>
            <div className="left">
              <img src={item.image} />
            </div>
            <div className="right">
              <div className="top">
                <h3>{item.title}</h3>
                <h5>{item.price}</h5>
                <h5>{item.category}</h5>
              </div>
                 <hr className="line"/>
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
