import React from "react"; // import module
import ReactDOM from "react-dom/client";
import "./index.css"; // importing css file
// Array of Object
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  //const x = johny;

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// components & inline styling of header
function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {}; // empty object
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
    //<h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}>
    //  Fast React Pizza Co.
    //</h1>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* Rendering list using JS map method */}
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // <Pizza name={pizza.name} />
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="/pizzas/funghi.jpg"
        price="10.00"
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price={12.0}
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="/pizzas/focaccia.jpg"
        price={6.0}
      /> */}
    </main>
  );
}

// component
// writing component as fxn, nesting component call one another, reuse component
// passing props
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>${props.pizzaObj.price}</span>
      </div>
      {/* <img src="/pizzas/funghi.jpg" />
      <h3>Pizza Funghi</h3>
      <p>Tomato, mozarella, mushrooms, and onion</p> */}
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // const hour = 23;
  //console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  // if (hour >= openHour && hour <= closeHour) alert("Sorry we're currenlty close!"); else alert();
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00, Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
      {/* {new Date().toLocaleTimeString()}. We're currently open */}
    </footer>
  );
  //return React.createElement("footer", null, "We are currently open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// react v18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react v17
//React.render(<App />);
