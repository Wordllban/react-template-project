import React, { useState, useEffect } from "react";

import styles from "./CartItem.module.scss";

import { useAppDispatch } from "../../redux";
import { getProduct } from "../../services";
interface CartItemProps {
  id: number;
  amount: number;
}
import { IItem } from "../../types";
import { addItemToCart, removeItemFromCart } from "../ItemCard/item.slice";

export const CartItem: React.FC<CartItemProps> = ({ id, amount }) => {
  const [item, setItem] = useState<IItem>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    getProduct(id).then((res) => setItem(res));
  }, []);

  const handleRemoveItemFromCart = () => {
    dispatch(removeItemFromCart(id));
  };

  const handleAddItemToCart = () => {
    dispatch(addItemToCart(id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.body}>
        <img src={item?.image} className={styles.image} />
        <div className={styles.info}>
          <h4 className={styles.title}>{item?.title}</h4>
          <div className={styles.price}>
            <p>
              Price: {amount} x {item?.price} ={" "}
              {item?.price && +item.price * amount}$
            </p>
            <div className={styles.counter}>
              <span className={styles.sign} onClick={handleRemoveItemFromCart}>
                -
              </span>
              <span className={styles.quantity}>{amount}</span>
              <span className={styles.sign} onClick={handleAddItemToCart}>
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
