import React from "react";

import { addItemToCart } from "./item.slice";
import styles from "./ItemCard.module.scss";

import cartIcon from "../../assets/icons/cart.svg";
import { useAppDispatch } from "../../redux";
import { IItem } from "../../types";

export const ItemCard: React.FC<IItem> = ({
  id,
  title = "Test Name",
  price = 123,
  image = "https://source.unsplash.com/random/",
  description = "No description provided",
}) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(id));
  };

  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} />
      <div className={styles.body}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.buy}>
          <span className={styles.price}>{price}</span>
          <img
            src={cartIcon}
            width="32"
            height="32"
            className={styles.cart}
            onClick={handleAddToCart}
          />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
