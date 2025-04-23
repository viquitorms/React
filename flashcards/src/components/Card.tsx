import { useState } from "react";

interface ICard {
    id: number,
    question: string,
    answer: string,
    isSelected: boolean
}

export default function Card(props: ICard) {

    const [selectedCardId, setSelectedCardId] = useState(0);

    if (props.isSelected && props.id == selectedCardId) {
        return (
            <div className="bg-red-300 p-4 cursor-pointer">
                <p className="text-md">{props.question}</p>
            </div>
        );
    }
    else {
        return (
            <div className="bg-gray-300 p-4 cursor-pointer">
                <p className="text-md">{props.question}</p>
            </div>
        );
    }
}