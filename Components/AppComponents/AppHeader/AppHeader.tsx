"use client";
import Link from "next/link";
import styles from "./AppHeader.module.css";
import {
  Button,
  Card,
  Flex,
  Text,
  useUMColors,
} from "@tyanpey/urban_memories_lib";
import { usePathname } from "next/navigation";
import { headerPaths } from "@/Data/appPaths";

export const AppHeader = () => {
  const UMColors = useUMColors();
  const pathName = usePathname();

  return (
    <Card className={styles.appHeader} borderRadius={0} padding={"5px 10px"}>
      <Flex horizontally="apart">
        {/* Left part */}
        <Flex gap={"20px"}>
          {/* App Icon / home */}
          <Link href="/">
            <Text text="Pantry Project" bold color={UMColors.fontGray} />
          </Link>

          {/* App Paths */}
          <Flex width="fit-content">
            {headerPaths.map((path, index) => {
              return (
                <Link key={index} href={path.href}>
                  <Text
                    text={path.name}
                    bold={pathName == path.href}
                    color={
                      pathName == path.href ? UMColors.font : UMColors.fontGray
                    }
                  />
                </Link>
              );
            })}
          </Flex>
        </Flex>

        {/* Right Part */}
        <Button
          text={"settings"}
          mode={"bgGray"}
          onClick={() => {
            alert("This is a placeholder button.");
          }}
        />
        
      </Flex>
    </Card>
  );
};
