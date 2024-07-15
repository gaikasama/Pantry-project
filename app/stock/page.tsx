"use client";
import {
  Button as ButtonUM,
  Card,
  Flex as FlexUM,
  Text as TextUM,
} from "@tyanpey/urban_memories_lib";

import { useItems } from "@/Contexts/ItemsContext/ItemsWrapper";
import { useAppModal } from "@/Contexts/AppModalContext/AppModalWrapper";
import { StockAddModal } from "./_components/StockAddModal";

export default function ItemsPage() {
  const { items, stocks, setStocks } = useItems();
  const modal = useAppModal();

  const handleAddItem = () => {
    modal.openModal(
      {
        title: "Add Stock",
        icon: undefined,
      },
      <StockAddModal
        closeModal={() => {
          modal.closeModal();
        }}
      />
    );
  };

  const getItemName = (itemId: number): string => {
    const item = items.find((item) => item.id === itemId);
    return item ? item.name : "Unknown Item";
  };

  const handleDeleteItem = (stockId: number) => {
    if (!confirm("Are you sure you want to delete this stock?")) return;
    const updatedStocks = stocks.filter((stock) => stock.id !== stockId);
    setStocks(updatedStocks);
  };

  return (
    <FlexUM direction="v" gap="20px">
      {/* List */}
      <FlexUM direction="v">
        {stocks.map((stock) => {
          return (
            <Card key={stock.id}>
              <FlexUM horizontally="apart">
                <TextUM text={getItemName(stock.itemId)} bold />
                <ButtonUM
                  text="Delete Stock"
                  mode={"bgGray"}
                  fullWidth={false}
                  onClick={() => handleDeleteItem(stock.id)}
                />
              </FlexUM>
            </Card>
          );
        })}
      </FlexUM>

      {/* Add Button */}
      <ButtonUM
        text="Add Stock"
        onClick={handleAddItem}
        mode={"bgGray"}
        fullWidth
      />
    </FlexUM>
  );
}
