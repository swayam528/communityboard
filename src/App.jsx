import React from "react";
import FoodTruck from "./components/FoodTruck";
import "./App.css";
import birriaLandia from "./assets/birria-landia.png";
import mysttikMasala from "./assets/mysttik-masala.png";
import halalGuys from "./assets/halal-guys.png";
import kogiBBQ from "./assets/kogi-bbq.png";
import cousinsLobster from "./assets/lobster.png";
import nongsKhaoManGai from "./assets/Nong.png";
import senorSisig from "./assets/sisig.png";
import waffleBus from "./assets/wafflebus.png";
import marinationMobile from "./assets/marinationmobile.png";
import fukuBurger from "./assets/fuku.png";
import storeBanner from "./assets/store-banner.png";

const foodTrucks = [
  {
    name: "Birria-Landia",
    cuisine: "Mexican",
    image: birriaLandia,
    menu: "https://birrialandia.com/",
  },
  {
    name: "Mysttik Masala",
    cuisine: "Indian",
    image: mysttikMasala,
    menu: "https://indianfoodny.com/lander",
  },
  {
    name: "The Halal Guys",
    cuisine: "Middle Eastern",
    image: halalGuys,
    menu: "https://thehalalguys.com/",
  },
  {
    name: "Kogi BBQ",
    cuisine: "Korean-Mexican Fusion",
    image: kogiBBQ,
    menu: "https://kogibbq.com/menu/",
  },
  {
    name: "Cousins Maine Lobster",
    cuisine: "Seafood",
    image: cousinsLobster,
    menu: "https://www.cousinsmainelobster.com/menu/",
  },
  {
    name: "Nong’s Khao Man Gai",
    cuisine: "Thai",
    image: nongsKhaoManGai,
    menu: "https://khaomangai.com/menu/",
  },
  {
    name: "Señor Sisig",
    cuisine: "Filipino-Mexican Fusion",
    image: senorSisig,
    menu: "https://www.senorsisig.com/menu",
  },
  {
    name: "The Waffle Bus",
    cuisine: "American (Waffles & Sandwiches)",
    image: waffleBus,
    menu: "https://thewafflebus.com/menu/",
  },
  {
    name: "Marination Mobile",
    cuisine: "Hawaiian-Korean Fusion",
    image: marinationMobile,
    menu: "https://marinationmobile.com/menu/",
  },
  {
    name: "Fukuburger",
    cuisine: "Japanese-American Fusion",
    image: fukuBurger,
    menu: "https://www.fukuburger.com/menu/",
  },
];

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={storeBanner} alt="Banner" className="banner-image" />
        <h1>Food Truck Favorites</h1>
      </div>
      <div className="food-truck-container">
        {foodTrucks.map((truck) => (
          <FoodTruck key={truck.name} {...truck} />
        ))}
      </div>
    </div>
  );
};

export default App;
