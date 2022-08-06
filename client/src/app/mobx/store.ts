
import { createContext, useContext } from "react";
import SignalRStore from "./signalRStore";


interface Store {
    signalRStore: SignalRStore;
}

export const store: Store = {
    signalRStore: new SignalRStore()

}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}