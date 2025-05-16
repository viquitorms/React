import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

interface IAccordion {
    title: string;
    text: string;
}

export default function Accordion(props: IAccordion) {
    return (
        <>
            <div className="p-5 bg-gray-100 w-4/5">
                <div className="flex justify-between items-center">
                    <div>
                        {props.title}
                    </div>
                    <div>
                        <IoIosArrowDropdown size={20} />
                    </div>
                </div>
                <div className="hidden">{props.text}</div>
            </div>
        </>
    );
}