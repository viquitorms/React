import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

interface IAccordion {
    number: number,
    title: string;
    text: string;
}

export default function Accordion(props: IAccordion) {

    const [isOpen, setIsOpen] = useState(false);

    function handleToogle() {
        setIsOpen((isOpen) => !isOpen)
    }

    return (
        <div className={`bg-gray-50 cursor-pointer ${isOpen ? "border-t-4 border-amber-600" : ""}`} onClick={handleToogle} >
            <div className="flex justify-between items-center p-4">
                <div className="flex flex-row gap-4">
                    <h1>{props.number}</h1>
                    <h1>{props.title}</h1>
                </div>
                <div>
                    {
                        (isOpen && <IoIosArrowDropup size={20} className={`text-amber-600`} />) ||
                        (!isOpen && <IoIosArrowDropdown size={20} />)
                    }
                </div>
            </div>
            {isOpen && <div className="p-4 bg-gray-100">{props.text}</div>}
        </div >
    );
}