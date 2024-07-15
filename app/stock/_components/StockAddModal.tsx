import { useItems } from "@/Contexts/ItemsContext/ItemsWrapper";
import { Stock, itemsData } from "@/Contexts/ItemsContext/data";
import {
  Button,
  Card,
  Flex,
  Input,
  InputProps,
} from "@tyanpey/urban_memories_lib";
import { useState } from "react";

export const StockAddModal = ({ closeModal }: { closeModal: () => void }) => {
  const [newStock, setNewStock] = useState<Stock>({
    id: new Date().getTime(),
    itemId: 0,
    expiryDate: new Date(),
  });

  const { stocks, setStocks } = useItems();

  const handleSave = () => {
    setStocks([...stocks, newStock]);
    setNewStock({
      id: new Date().getTime(),
      itemId: 0,
      expiryDate: new Date(),
    });
    closeModal();
  };

  const generateSelectItems: InputProps["selectItems"] = itemsData.map(
    (item) => ({
      value: item.id,
      label: item.name,
    })
  );

  return (
    <Card shadowed={false}>
      <Flex direction="v" gap="20px">
        <Flex direction="v">
          <Input
            mode="select"
            selectItems={generateSelectItems}
            onChange={(value) => {
              setNewStock({
                ...newStock,
                itemId: Number(value),
              });
            }}
          />
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
