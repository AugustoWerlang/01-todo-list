import { PlusCircle } from "phosphor-react";
import styles from "./Header.module.css";
import logo from "../assets/Logo.svg";
import { useState } from "react";

export function Header({ callback }:{callback:(title:string)=>void}) {
  const [title, setTitle] = useState("");

  return(
    <header className={styles.header}>

      <img src={logo} alt="todo" />

      <div className={styles.newTask}>

        <input type="text" className={styles.input} placeholder="Adicione uma nova tarefa" value={title} onChange={(evt) => setTitle(evt.target.value)} />

        <button className={styles.button} onClick={() => callback(title)} >
          <span>Criar</span>
          <span><PlusCircle size={16} weight="bold" /></span>
        </button>

      </div>

    </header>
  )
}