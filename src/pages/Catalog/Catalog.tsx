import React, { useState, useEffect } from "react";

import styles from "./Catalog.module.scss";

import { ItemCard } from "../../components";
import { getProducts } from "../../services";
import { IItem } from "../../types";

export const Catalog: React.FC = () => {
  const [products, setProducts] = useState<IItem[]>();

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>Catalog Page</h2>
      <main className={styles.catalog}>
        {products &&
          products.map(({ id, title, price, description, image }) => {
            return (
              <ItemCard
                key={`product-${id}`}
                id={id}
                title={title}
                price={price}
                description={description}
                image={image}
              />
            );
          })}
      </main>
    </div>
  );
};
