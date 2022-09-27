import React from "react";
import styles from "./App.module.scss";

import github from "./github.png";

function App() {
  return (
    <div className={styles.app}>
      <h2 className={styles.title}>
        Template <span className={styles.react}>React</span> Repository
      </h2>
      <a
        href={"https://github.com/Wordllban/react-template-project"}
        className={styles.link}
      >
        <img src={github} width="25" height="25" className={styles.icon} />
        Github
      </a>
    </div>
  );
}

export default App;
