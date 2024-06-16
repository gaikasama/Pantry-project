import { AppHeader } from "../AppHeader/AppHeader";
import styles from "./AppWrapper.module.css";
import { ReactNode } from "react";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.appWrapper}>
      <AppHeader />
      <div className={styles.appContent}>{children}</div>
    </div>
  );
};
