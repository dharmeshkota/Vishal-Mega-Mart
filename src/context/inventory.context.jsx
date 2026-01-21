import { createContext } from "react";
import INVENTORY_DATA from '../data/inventory';

const InventoryContext = createContext(INVENTORY_DATA);

export default InventoryContext;