
import { PlusCircle } from "phosphor-react";

import styles from "./CreateButton.module.css";

export function CreateButton() {
  return(
    <button className={styles.button}>
      <span>Criar</span>
      <PlusCircle size={16} weight="bold" />
    </button>
  )
}