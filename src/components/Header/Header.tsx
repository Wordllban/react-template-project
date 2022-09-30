import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.scss";

import { useAppSelector } from "../../redux";
import { getTotalAmount } from "../ItemCard/item.slice";

export const Header: React.FC = () => {
  const amount = useAppSelector(getTotalAmount);

  const location = useLocation();
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <header className={styles.header}>
      <nav className={styles.wrapper}>
        <ul className={styles.nav}>
          <li className={activePage == "/" ? styles.active : ""}>
            <Link to="/" className={styles.link}>
              Catalog
            </Link>
          </li>
          <li className={activePage == "/cart" ? styles.active : ""}>
            <Link to="/cart" className={styles.link}>
              Cart - <span className={styles.amount}>{amount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
