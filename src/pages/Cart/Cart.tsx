import React from "react";

import styles from "./Cart.module.scss";

import { Button, CartItem } from "../../components";

export const Cart: React.FC = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.body}>
        <CartItem id={0} />
        <CartItem id={1} />
        <CartItem id={2} />
        <CartItem id={3} />
      </div>
      <Button title="order" />
    </div>
  );
};
