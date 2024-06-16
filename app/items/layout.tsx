"use client";
import { ItemsWrapper } from "@/Contexts/ItemsContext/ItemsWrapper";
import { ReactNode } from "react";

export default function ItemsLayout({ children }: { children: ReactNode }) {
  return <ItemsWrapper>{children}</ItemsWrapper>;
}
