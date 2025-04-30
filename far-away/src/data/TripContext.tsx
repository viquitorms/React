import { createContext, ReactNode, useContext, useState } from "react";

interface ITripItem {
    name: string;
    quantity: number;
    checked: boolean;
}

interface ITripContext {
    tripList: ITripItem[];
    addItem: (item: ITripItem) => void;
    toogleChecked: (name: string) => void;
    removeItem: (name: string) => void;
    sortList: (sortBy: number, direction: number) => void;
}


const TripContext = createContext<ITripContext | undefined>(undefined);

export function TripProvider({ children }: { children: ReactNode }) {
    const [tripList, setTripList] = useState<ITripItem[]>([]);

    const addItem = (item: ITripItem) => {
        setTripList((previousItems) => [...previousItems, item])
    };

    const toogleChecked = (name: string) => {
        setTripList((prev) =>
            prev.map((item) =>
                item.name === name ? { ...item, checked: !item.checked } : item
            )
        )
    };

    const removeItem = (name: string) => {
        setTripList(prevList => prevList.filter(item => item.name !== name));
    }

    function compareByQuantity(a: any, b: any, direction: number) {
        return direction === 0 ? a.quantity - b.quantity : b.quantity - a.quantity;
    }

    function compareByName(a: any, b: any, direction: number) {
        return direction === 0
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    }

    function sortList(sortBy: number, direction: number) {
        const sorted = [...tripList];

        const sortedList = sortBy === 0
            ? sorted.sort((a, b) => direction === 0 ? a.quantity - b.quantity : b.quantity - a.quantity)
            : sorted.sort((a, b) => direction === 0 ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

        setTripList(sortedList);
    }

    return (
        <TripContext.Provider value={{ tripList, addItem, toogleChecked, removeItem, sortList }}>
            {children}
        </TripContext.Provider>
    )
}

export function useTrip() {
    const context = useContext(TripContext);
    if (!context) {
        throw new Error("Erro ao utilizar useItem");
    }

    return context;
}