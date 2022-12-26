import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import { v4 as uuid } from 'uuid';

import { ClipboardText } from "phosphor-react";

import styles from "./App.module.css";

import "./global.css";

interface TaskProps {
  id: string;
  title: string;
  isDone: boolean;
}

const initialTasks: TaskProps[] = [
  {
    id: uuid(),
    title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false
  },
  {
    id: uuid(),
    title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: false
  },
  {
    id: uuid(),
    title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isDone: true
  }
]

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const doneTasks = tasks.filter(task => task.isDone === true).length;

  const createTask = (title: string) => {
    const newTask: TaskProps = {
      id: uuid(),
      title: title,
      isDone: false
    };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const changeTaskState = (id: string) => {
    setTasks(tasks.map(task => {
      if(task.id === id) {
        return {
          id: task.id,
          title:task.title,
          isDone: !task.isDone
        };
      }
      return task;
    }));
  }

  return (
    <>
      <Header createTask={createTask} />
      <main className={styles.main}>
        <div className={styles.tasksCountersWrapper}>
          <div>
            Tarefas criadas
            <span>
              {tasks.length}
            </span>
          </div>
          <div>
            Concluídas
            <span>
              {doneTasks > 0 ? `${doneTasks} de ${tasks.length}` : '0'}
            </span>
          </div>
        </div>
        <div className={styles.tasksWrapper}>
          {
            tasks.length > 0 ? 
              tasks.map(task => <Task key={task.id} deleteTask={deleteTask} changeTaskState={changeTaskState} {...task} />) 
              :
              <div className={styles.empty}>
                <span>
                  <ClipboardText size={56} />
                </span>
                <span>
                  <strong>Você ainda não tem tarefas cadastradas</strong><br/>
                  Crie tarefas e organize seus itens a fazer
                </span>
              </div>
          }
        </div>
      </main>
    </>
  )
}