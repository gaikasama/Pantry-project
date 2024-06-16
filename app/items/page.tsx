"use client";
import {
  Button as ButtonUM,
  Card,
  Flex as FlexUM,
  Text as TextUM,
} from "@tyanpey/urban_memories_lib";

import { useItems } from "@/Contexts/ItemsContext/ItemsWrapper";
import { useAppModal } from "@/Contexts/AppModalContext/AppModalWrapper";
import { ItemEditModal } from "./_components/ItemEditModal";

export default function ItemsPage() {
  const { items, setItems } = useItems();
  const modal = useAppModal();

  const handleAddItem = () => {
    modal.openModal(
      {
        title: "Add Item",
        icon: undefined,
      },
      <ItemEditModal
        closeModal={() => {
          modal.closeModal();
        }}
      />
    );
  };

  const handleDeleteItem = (itemId: number) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <FlexUM direction="v" gap="20px">
      {/* List */}
      <FlexUM direction="v">
        {items.map((item) => {
          return (
            <Card key={item.id}>
              <FlexUM horizontally="apart">
                <TextUM text={item.name} bold />
                <ButtonUM
                  text="Delete Item"
                  mode={"bgGray"}
                  fullWidth={false}
                  onClick={() => handleDeleteItem(item.id)}
                />
              </FlexUM>
            </Card>
          );
        })}
      </FlexUM>

      {/* Add Button */}
      <ButtonUM
        text="Add Item"
        onClick={handleAddItem}
        mode={"bgGray"}
        fullWidth
      />
    </FlexUM>
  );
}
