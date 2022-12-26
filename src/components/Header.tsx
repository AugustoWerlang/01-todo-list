import { PlusCircle } from "phosphor-react";
import styles from "./Header.module.css";
import logo from "../assets/Logo.svg";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface HeaderProps {
  createTask: (title: string) => void;
}

export function Header({ createTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  const handleCreateTask = (evt: FormEvent) => {
    evt.preventDefault();

    if(title.length <= 0) {
      return alert("Informe um título para a tarefa!");
    }

    createTask(title);
  }

  const handleTaskTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.target.setCustomValidity("");
    setTitle(evt.target.value);
  }

  const handleTaskTitleInvalid = (evt: InvalidEvent<HTMLInputElement>) => {
    evt.target.setCustomValidity("Informe um título para a tarefa!");
  }

  return(
    <header className={styles.header}>

      <img src={logo} alt="todo" />

      <form className={styles.newTask} onSubmit={handleCreateTask} >

        <input 
          type="text" 
          className={styles.input} 
          placeholder="Adicione uma nova tarefa" 
          value={title} 
          onChange={handleTaskTitleChange} 
          onInvalid={handleTaskTitleInvalid} 
          required />

        <button type="submit" className={styles.button} >
          <span>Criar</span>
          <span><PlusCircle size={16} weight="bold" /></span>
        </button>

      </form>

    </header>
  )
}