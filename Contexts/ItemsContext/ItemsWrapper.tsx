import { ReactNode, createContext, useContext, useState } from "react";
import { Item, Stock, itemsData, stocksData } from "./data";

// ----- Context -------------------
type ItemsContextType = {
  items: Item[];
  setItems: (items: Item[]) => void;
  stocks: Stock[];
  setStocks: (stocks: Stock[]) => void;
};
const ItemsContext = createContext<ItemsContextType | null>(null);

// ----- Wrapper ---------
export const ItemsWrapper = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Item[]>(itemsData);
  const [stocks, setStocks] = useState<Stock[]>(stocksData);

  return (
    <ItemsContext.Provider value={{ items, setItems, stocks, setStocks }}>
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
