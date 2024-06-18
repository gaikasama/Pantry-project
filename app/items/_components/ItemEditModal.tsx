import { useItems } from "@/Contexts/ItemsContext/ItemsWrapper";
import { Item } from "@/Contexts/ItemsContext/data";
import { Button, Card, Flex, Input, Text } from "@tyanpey/urban_memories_lib";
import { useState } from "react";

export const ItemEditModal = ({ closeModal }: { closeModal: () => void }) => {
  const [newItem, setNewItem] = useState<Item>({
    id: new Date().getTime(),
    name: "",
  });
  const { items, setItems } = useItems();

  const handleSave = () => {
    setItems([...items, newItem]);
    setNewItem({
      id: new Date().getTime(),
      name: "",
    });
    closeModal();
  };

  return (
    <Card shadowed={false}>
      <Flex direction="v" gap="20px">
        <Input
          label="Item Name"
          bg
          value={newItem.name}
          onChange={(value) => {
            setNewItem({
              ...newItem,
              name: value,
            });
          }}
        />
        <Flex direction="v">
          <Button text="Save" onClick={handleSave} fullWidth mode={"bgGray"} />
          <Button
            text="Cancel"
            onClick={closeModal}
            fullWidth
            mode={"secondary"}
          />
        </Flex>
      </Flex>
    </Card>
  );
};
