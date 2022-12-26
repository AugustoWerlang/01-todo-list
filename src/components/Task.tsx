import { Trash, Check } from "phosphor-react";
import { useId } from "react";
import styles from "./Task.module.css";

interface CreateTaskProps {
  id: string;
  title: string;
  isDone: boolean;
  changeTaskState: (id: string) => any;
  deleteTask: (id: string) => any;
}

export function Task({ id, isDone, title, changeTaskState, deleteTask}: CreateTaskProps) {
  const checkIsDoneId = useId();

  const handleTaskStateChange = () => {
    changeTaskState(id);
  }

  const handleDeleteTask = () => {
    deleteTask(id);
  }

  return(
    <label htmlFor={checkIsDoneId} className={`${styles.task} ${isDone && styles.done}`}>
      <input id={checkIsDoneId} type="checkbox" checked={isDone} onChange={handleTaskStateChange} />
      <span>
        <Check size={14} weight="bold" />
      </span>
      <h2>{title}</h2>
      <button onClick={handleDeleteTask}><Trash size={16} /></button>
    </label>
  )
}