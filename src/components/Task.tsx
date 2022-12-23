import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

interface CreateTaskProps {
  id: number;
  title: string;
  isDone: boolean;
  callback: (id: number) => any;
}

export function Task(props: CreateTaskProps) {
  const [isDone, setIsDone] = useState(props.isDone);

  const handleIsDoneChange = () => {
    setIsDone(!isDone);
  }

  return(
    <div className={styles.task}>
      <div>
        <input type="checkbox" checked={isDone} onChange={handleIsDoneChange} />
        <span></span>
      </div>
      <h2>{props.title}</h2>
      <button onClick={() => props.callback(props.id)}><Trash size={16} /></button>
    </div>
  )
}