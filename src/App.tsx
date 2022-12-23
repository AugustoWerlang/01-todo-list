import { useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from "./App.module.css";

import "./global.css";
import { ClipboardText } from "phosphor-react";

interface TaskProps {
  id: number;
  title: string;
  isDone: boolean;
}

const initialTasks: TaskProps[] = [
  {
    id: 1,
    title: "Primeira tarefa",
    isDone: false
  },
  {
    id: 2,
    title: "Segunda tarefa",
    isDone: false
  },
  {
    id: 3,
    title: "Terceira tarefa",
    isDone: true
  }
]

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const handleCreateTask = (title: string) => {
    console.log(title);
  }

  const handleDeleteTask = (id: number) => {
    console.log(id);
  }

  return (
    <>
      <Header callback={handleCreateTask} />
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
              {tasks.length > 0 ? `${tasks.filter(task => task.isDone === true).length} de ${tasks.length}` : '0'}
            </span>
          </div>
        </div>
        <div className={styles.tasksWrapper}>
          {
            tasks.length > 0 ? 
              tasks.map(task => <Task key={task.id} callback={handleDeleteTask} {...task} />) 
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