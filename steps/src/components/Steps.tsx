import { useState } from "react";
import "../style/Steps.css"

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 👨🏻",
    "Invest you new income 🤑"
]

export default function Steps(){
    const [step, setStep] = useState(0);

    function onClickNext() {
        if(step < messages.length - 1)
        setStep(step + 1)
    }

    function onClickPrevious() {
        if(step > 0) {
            setStep(step - 1)
        }
    }

    return (
        <div className="steps">
            <div className="numbers">
                <div className={`${step >= 0 ? "active" : ""} number`}>
                    <span>1</span>
                </div>
                <div className={`${step >= 1 ? "active" : ""} number`}>
                    <span>2</span>
                </div>
                <div className={`${step >= 2 ? "active" : ""} number`}>
                    <span>3</span>
                </div>
            </div>
            <div>
                <h3 className="text">Step {step + 1}: {messages[step]}</h3>
            </div>
            <div className="buttons">
                <div className="div-button">
                    <button className="button" onClick={onClickPrevious}>Previous</button>
                </div>
                <div>
                    <button className="button" onClick={onClickNext}>Next</button>
                </div>
            </div>
        </div>
    );
}