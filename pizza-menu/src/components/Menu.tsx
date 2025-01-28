import { pizzaData } from "../data/pizzaData";
import Pizza from "./Pizza";

function Menu() {
  return (
    <main className="menu">
      {pizzaData.map((pizza) => (
        <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut} />
      ))}
    </main>
  );
}

export default Menu;
