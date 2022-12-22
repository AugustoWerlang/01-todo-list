import { Input } from "./Input";
import { CreateButton } from "./CreateButton";

import styles from "./Header.module.css";

import logo from "../assets/Logo.svg";

export function Header() {
  return(
    <header className={styles.header}>
      <img src={logo} alt="todo" className={styles.logo} />
      <div className={styles.newTask}>
        <Input />
        <CreateButton />
      </div>
    </header>
  )
}