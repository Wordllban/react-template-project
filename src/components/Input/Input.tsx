import React from "react";

import styles from "./Input.module.scss";

interface InputProps {
  setInputValue: React.Dispatch<React.SetStateAction<string[]>>;
  validationSchema?: RegExp;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <input type="text" className={styles.input} placeholder={placeholder} />
  );
};
