import { useState } from 'react'
import '../assets/DateCounter.css'

export default function DateCounter() {

    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);

    const date = new Date();
    date.setDate(date.getDate() + count);

    function onClickStepPlus() {
        setStep((s) => s + 1)
        handleDateChange()
    }

    function onClickStepMinus() {
        setStep((s) => s - 1) 
        handleDateChange()
    }

    function onClickCountPlus() {
        setCount((c) => c + step) 
        handleDateChange()
    }

    function onClickCountMinus() {
        setCount((c) => c - step)
        handleDateChange()
    }

    function handleDateChange() {
        const dateNow = new Date();

        return dateNow.setDate(dateNow.getDate() + (step * count))
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
                <span>
                    {
                        count === 0
                        ? "Today is "
                        : count > 0
                        ? `${count} days from today is `
                        : `${Math.abs(count)} days ago was `
                    }
                </span>
                <span>{date.toDateString()}</span>
            </div>
        </div>
    )
}