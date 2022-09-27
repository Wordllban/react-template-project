import React, { useState, useEffect, ReactElement } from "react";
import { useLocation } from "react-router-dom";

import styles from "./Header.module.scss";

interface HeaderProps {
  content: ReactElement;
}

export const Header: React.FC<HeaderProps> = ({ content }) => {
  const location = useLocation();
  const [, setActivePage] = useState("/");

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <header className={styles.header}>
      <nav className={styles.wrapper}>
        <ul className={styles.nav}>
          {content}
          {/* <li className={activePage == "/currency-list" ? styles.active : ""}>
            <Link to="/currency-list" className={styles.link}>
              Example
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
