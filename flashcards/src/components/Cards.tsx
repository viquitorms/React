import { useState } from "react"
import { data } from "../data/Cards"
import Card from "./Card"

export default function Cards() {

    const [selectedCardId, setSelectedCardId] = useState(0);

    function OnClickCard(id: number) {
        if (selectedCardId != 0) {
            setSelectedCardId(0);
        }
        setSelectedCardId(id)
    }

    return (
        <div className="w-full md:grid md:grid-cols-3 gap-4 p-4">
            {data.map((x) => (
                <Card
                    key={x.id}
                    id={x.id}
                    question={x.question}
                    answer={x.answer}
                    selected={selectedCardId === x.id}
                    onClick={() => OnClickCard(x.id)}
                />

            ))}
        </div>
    )
}