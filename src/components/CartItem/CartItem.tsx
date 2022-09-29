import React from "react";

import styles from "./CartItem.module.scss";

interface CartItemProps {
  id: number;
}

export const CartItem: React.FC<CartItemProps> = ({ id }) => {
  console.log("cart item id: ", id); // to do: fetch by id
  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <img
          src="https://source.unsplash.com/random/"
          className={styles.image}
        />
        <div className={styles.info}>
          <h4 className={styles.title}>title {id}</h4>
          <div className={styles.price}>
            <p>Price: 123 * 5 = 615</p>
            <div className={styles.counter}>
              <span className={styles.sign}>-</span>
              <span className={styles.quantity}>5</span>
              <span className={styles.sign}>+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
