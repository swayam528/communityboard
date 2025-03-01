import React from "react";
import "../App.css";
const FoodTruck = (props) => {
  return (
    <div className="food-truck-card">
      <img src={props.image} alt={props.name} className="food-truck-image" />
      <div className="food-truck-info">
        <h3>{props.name}</h3>
        <p>{props.cuisine}</p>
        <button
          className="view-menu-btn"
          onClick={() => window.open(props.menu, "_blank")}
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

export default FoodTruck;
