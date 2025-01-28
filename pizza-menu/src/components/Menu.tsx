import { pizzaData } from "../data/pizzaData";

function Menu() {
  return (
    <>
      {pizzaData.map((pizza) => (
        <div>
          <div>
            <h2>{pizza.name}</h2>
            <img src={pizza.photoName} alt={pizza.name} width={300} />
          </div>
          <div>
            <p>{pizza.ingredients}</p>
            <span>${pizza.price}</span>
            <span> - </span>
            <span>
              {pizza.soldOut ? 'Sold Out' : 'On Stock'}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Menu;
