import { data } from "../data/Cards"
import Card from "./Card"

export default function Cards() {
    return (
        <div className="w-full md:grid md:grid-cols-3 gap-4 p-4">
            {data.map((x) => (
                <Card key={x.id} id={x.id} question={x.question} answer={x.answer} isSelected={false} />
            ))}
        </div>
    )
}