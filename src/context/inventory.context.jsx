import { createContext, useState } from "react";
import INVENTORY_DATA from '../data/inventory';

export const InventoryContext = createContext({
    inventory: {}
});

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState(INVENTORY_DATA);
    const value = { inventory };
    return <InventoryContext.Provider value={value}>{children}</InventoryContext.Provider>
}