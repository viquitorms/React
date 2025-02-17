import { useState } from 'react'
import '../assets/DateCounter.css'

export default function DateCounter() {

    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('')

    function onClickStepPlus() {
        setStep((s) => s + 1)
        setDate(handleDateChange)
    }

    function onClickStepMinus() {
        setStep((s) => s - 1) 
    }

    function onClickCountPlus() {
        setCount((c) => c + 1) 
    }

    function onClickCountMinus() {
        setCount((c) => c - 1) 
    }

    function handleDateChange() {
        const dateNow = new Date();

        return dateNow.setDate(dateNow.getDate() + (step * count)).toLocaleString()
    }

    return (
        <div className="box">
            <div className='counters-div'>
                <div className='counter'>
                    <div>
                        <button onClick={onClickStepMinus}>-</button>
                    </div>
                    <div>
                        <span>Step: {step}</span>
                    </div>
                    <div>
                        <button onClick={onClickStepPlus}>+</button>
                    </div>
                </div>
                <div className='counter'>
                    <div>
                        <button onClick={onClickCountMinus}>-</button>
                    </div>
                    <div>
                        <span>Count: {count}</span>
                    </div>
                    <div>
                        <button onClick={onClickCountPlus}>+</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    step == 0 &&
                    <span>Today is {new Date().toDateString()}</span>
                }
                {
                    (step > 0 && count > 0) &&
                    <span>{step * count} days from today is {new Date().toDateString()}</span>
                }
            </div>
        </div>
    )
}