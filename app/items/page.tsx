"use client";
import {
  Button as ButtonUM,
  Card,
  Flex as FlexUM,
  Text as TextUM,
} from "@tyanpey/urban_memories_lib";
import { Dialog, TextField, Button, Flex, Text } from "@radix-ui/themes";
import { useState } from "react";

import { useItems } from "@/Contexts/ItemsContext/ItemsWrapper";

export default function ItemsPage() {
  const { items, setItems } = useItems();
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    const newItemObj = {
      id: items.length + 1,
      name: newItem,
    };

    setItems([...items, newItemObj]);
    setNewItem("");
  };

  const handleDeleteItem = (itemId: number) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <FlexUM direction="v">
      {items.map((item) => {
        return (
          <Card key={item.id}>
            <Flex justify={"between"}>
              <TextUM text={item.name} bold />
              <ButtonUM
                text="Delete Item"
                mode={"bgGray"}
                fullWidth={false}
                onClick={() => handleDeleteItem(item.id)}
              />
            </Flex>
          </Card>
        );
      })}
      <Dialog.Root>
        <Dialog.Trigger>
          <ButtonUM text="Add Item" mode={"bgGray"} fullWidth />
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Add items</Dialog.Title>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Name
              </Text>
              <TextField.Root
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                defaultValue=""
                placeholder="Enter item"
              />
            </label>
          </Flex>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button onClick={handleAddItem}>Save</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </FlexUM>
  );
}
