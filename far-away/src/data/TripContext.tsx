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

    return (
        <TripContext.Provider value={{ tripList, addItem, toogleChecked, removeItem }}>
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