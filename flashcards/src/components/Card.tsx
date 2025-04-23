import { data } from "../data/Cards"

export default function Cards() {
    return (
        <div className="flex gap-2">
            {data.map(x => (
                <div className="bg-gray-200 p-10 rounded-3xl">
                    {x.question}
                </div>

            ))}
        </div>
    )
}