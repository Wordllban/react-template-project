import React, { useRef, useState, useEffect } from "react";

import styles from "./Select.module.scss";

import { assertIsNode } from "../../utils";

interface SelectProps {
  items: Record<string, string>;
  withSearch?: boolean;
}

export const Select: React.FC<Readonly<SelectProps>> = ({
  items,
  withSearch,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<string[]>(Object.keys(items));
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<string>("Select");

  const handleSearch = (pattern: string) => {
    setList(
      Object.keys(items).filter((item) => item.includes(pattern.toUpperCase())),
    );
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      assertIsNode(event.target);
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    setList(Object.keys(items));

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    setList(Object.keys(items));
  }, [items]);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.current}>{current}</span>
      </div>
      {isOpen && (
        <ul className={styles.list}>
          {withSearch && (
            <input
              type="text"
              onChange={(e) => {
                if (e.target.value.length >= 3) {
                  handleSearch(e.target.value);
                }
              }}
              className={styles.search}
              placeholder="Search"
            />
          )}

          {list.map((item, index) => {
            return (
              <li
                key={`${item + index}`}
                onClick={() => {
                  setCurrent(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
