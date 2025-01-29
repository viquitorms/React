import "../styles/pizza.css"

interface IPizza {
    name: string,
    photoName: string,
    ingredients: string,
    price: number,
    soldOut: boolean
}

function Pizza(props: IPizza) {
  return (
    <div>
        <div>
            <h2>{props.name}</h2>
            <img src={props.photoName} alt={props.name} width={350}/>
        </div>
        <div>
            <p className="ingredients">
                {props.ingredients}
            </p>
            <span className="price">
                ${props.price}
            </span>
            <span> - </span>
            <span>
                {props.soldOut ? 'Sold Out' : 'On Stock'}
            </span>
        </div>
    </div>
  );
}

export default Pizza;
