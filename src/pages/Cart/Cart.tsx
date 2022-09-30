import React from "react";

import styles from "./Cart.module.scss";

import { Button, CartItem } from "../../components";
import { getCartItems } from "../../components/ItemCard/item.slice";
import { useAppSelector } from "../../redux";
import { TCartItem } from "../../types";

export const Cart: React.FC = () => {
  const productsToBuyIds: TCartItem[] = useAppSelector(getCartItems);

  return (
    <div className={styles.cart}>
      <div className={styles.body}>
        {productsToBuyIds.map(({ id, amount }) => (
          <CartItem key={`cart-item-${id}`} id={id} amount={amount} />
        ))}
      </div>
      <Button title="order" />
    </div>
  );
};
