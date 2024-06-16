"use client";
import { Button, Card, Flex, SlideupModal, Text } from "@tyanpey/urban_memories_lib";
import { Item, itemsData } from "./data";
import { useState } from "react";

export default function ItemsPage() {

  const [items, setItems] = useState<Item[]>(itemsData);

  const handleAddItem = () => {
    alert("function to add item.");
  }

  return (
    <Flex direction="v">
      {items.map((item) => {
        return (
          <Card key={item.id}>
            <Text text={item.name} bold />
          </Card>
        );
      })}
      <Button text="Add Item" mode={"bgGray"} fullWidth onClick={handleAddItem} />
    </Flex>
  );
}