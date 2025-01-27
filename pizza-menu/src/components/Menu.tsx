import { pizzaData } from "../data/pizzaData";

function Menu() {
  return (
    <>
      {pizzaData.map((pizza) => (
        <div>
          <h2>{pizza.name}</h2>
          <img src={pizza.photoName} alt={pizza.name} width={300} />
        </div>
      ))}
    </>
  );
}

export default Menu;
