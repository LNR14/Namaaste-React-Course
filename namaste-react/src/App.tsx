import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import exampleData from "./example.json";
import "./App.css";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRl50rW57eWwoW335Pxtdqh7cHjHl-Z8eAf0l6p8fJg&s=10"
        />{" "}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Order food</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

const resList = {};
const Body = () => {
  const resList =
    exampleData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList &&
          resList.map((restaurant) => (
            <RestuarantCard
              key={restaurant.info.id}
              resName={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              rating={restaurant.info.avgRating}
              waitTime={restaurant.info.sla.deliveryTime}
              costForTwo={restaurant.info.costForTwo}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
            />
          ))}
      </div>
    </div>
  );
};

const RestuarantCard = (props) => {
  console.log(props);
  const { resName, cuisines, rating, waitTime, cloudinaryImageId, costForTwo } =
    props;
  return (
    <div className="res-card" style={styleCard}>
      <h3> {resName}</h3>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="biryani"
      />
      <h4> {cuisines.join(", ")} </h4>
      <h4> {rating} </h4>
      <h4> {costForTwo} </h4>
      <h4> {waitTime} mins</h4>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
