import "../style/Steps.css"

export default function Steps(){
    return (
        <div className="steps">
            <div className="numbers">
                <div className="number">
                    <span>1</span>
                </div>
                <div className="number"> 
                    <span>1</span>
                </div>
                <div className="number">
                    <span>1</span>
                </div>
            </div>
            <div>
                <span>Hello!</span>
            </div>
            <div className="buttons">
                <div className="div-button">
                    <button className="button">Previous</button>
                </div>
                <div>
                    <button className="button">Next</button>
                </div>
            </div>
        </div>
    );
}