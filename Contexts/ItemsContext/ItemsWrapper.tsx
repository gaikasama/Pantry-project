import { ReactNode, createContext, useContext, useState } from "react";
import { Item, itemsData } from "./data";

// ----- Contetxt -------------------
type ItemsContextType = {
  items: Item[];
  setItems: (items: Item[]) => void;
};
const ItemsContext = createContext<ItemsContextType | null>(null);

// ----- Wrapper ---------
export const ItemsWrapper = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>(itemsData);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

// ----- Hook -----------------
export const useItems = () => {
  const itemsContext = useContext(ItemsContext);
  if (!itemsContext) {
    throw new Error("useItems must be used within a ItemsProvider");
  }
  return itemsContext;
};
