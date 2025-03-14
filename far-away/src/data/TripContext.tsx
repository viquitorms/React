import { createContext, ReactNode, useContext, useState } from "react";

interface ITripItem {
    name: string;
    quantity: number;
    checked: boolean;
}

interface ITripContext {
    tripList: ITripItem[];
    addItem: (item: ITripItem) => void;
}

const TripContext = createContext<ITripContext | undefined>(undefined);

export function TripProvider({ children }: { children: ReactNode }) {
    const [tripList, setTripList] = useState<ITripItem[]>([]);

    const addItem = (item: ITripItem) => {
        setTripList((previousItems) => [...previousItems, item])
    };


    return (
        <TripContext.Provider value={{ tripList, addItem }}>
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