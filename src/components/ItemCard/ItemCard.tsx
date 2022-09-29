import React from "react";

import styles from "./ItemCard.module.scss";

import cartIcon from "../../assets/icons/cart.svg";
import { Item } from "../../types";

export const ItemCard: React.FC<Partial<Item>> = ({
  title = "Test Name",
  price = 123,
  image = "https://source.unsplash.com/random/",
  description = "No description provided",
}) => {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.buy}>
          <span className={styles.price}>{price}</span>
          <img src={cartIcon} width="32" height="32" className={styles.cart} />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
