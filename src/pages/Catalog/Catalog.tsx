import React from "react";

import styles from "./Catalog.module.scss";

import { ItemCard } from "../../components";

//interface CatalogProps {}

export const Catalog: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Catalog Page</h2>
      <main className={styles.catalog}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </main>
    </div>
  );
};
