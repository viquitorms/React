import "../styles/Profile.css"

interface IProfile {
    image: string,
    name: string,
    text: string,
    children: JSX.Element
}

export default function Profile(props: IProfile){
    return (
        <main className="profile">
            <div>
                <img src={props.image} alt={props.name} className="image"/>
            </div>
            <div className="textBox">
                <div>
                    <h1>{props.name}</h1>
                </div>
                <div className="text">
                    <p>{props.text}</p>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </main>
    );
}