import { MouseEventHandler } from "react";

interface ICard {
    id: number,
    question: string,
    answer: string,
    onClick: MouseEventHandler<HTMLDivElement>,
    selected: boolean
}

export default function Card(props: ICard) {
    return (
        <div
            className={`${props.selected ? 'bg-green-300' : 'bg-gray-300'} p-4 cursor-pointer`}
            onClick={props.onClick}
        >
            <p className="text-md">{props.selected ? props.answer : props.question}</p>
        </div>
    );
}
