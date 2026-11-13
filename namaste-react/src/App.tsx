import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestuarantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
          rating="4.4"
          waitTime="30 mins"
        />
        <RestuarantCard
          resName="KFC"
          cuisine="American, Chicken"
          rating="4.0"
          waitTime="25 mins"
        />
      </div>
    </div>
  );
};

const RestuarantCard = (props) => {
  const { resName, cuisine, rating, waitTime } = props;
  return (
    <div className="res-card" style={styleCard}>
      <h3> {resName}</h3>
      <img
        className="res-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4e5_dosmTxs04PtVQiTb9iJUvPmLb1pJQ2N49kYonTsImfYsIx7nq3DA&s=10"
        alt="biryani "
      />
      <h4> {cuisine} </h4>
      <h4> {rating} </h4>
      <h4> {waitTime} </h4>
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
