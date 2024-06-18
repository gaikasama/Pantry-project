

// --------- Item ------------------
export type Item = {
  id: number;
  name: string;
}

export const itemsData: Item[] = [
  { id: 1, name: "item 1" },
  { id: 2, name: "item 2" },
  { id: 3, name: "item 3" },
]

// --------- Stock ------------------
export type Stock = {
  id: number;
  itemId: number;
  expiryDate?: Date;
}

export const stocksData: Stock[] = [
  { id: 1, itemId: 1, expiryDate: new Date() },
  { id: 2, itemId: 1, expiryDate: new Date(new Date().getDate() + 2) },
  { id: 3, itemId: 2 },
  { id: 4, itemId: 3 },
  { id: 5, itemId: 3 },
  { id: 6, itemId: 3 },
]