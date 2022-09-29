import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.scss";
import { Header } from "./components";
import { Cart, Catalog } from "./pages";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
