import { InterfaceTask } from '../../App'
import { Task } from '../Task'
import styles from './tasks.module.css'
interface Props {
    tasks: InterfaceTask[];
}
export function Tasks({tasks}: Props) {
    const tasksQuantify = tasks.length;
    const completedTasks = tasks.filter(tasks => tasks.isCompleted).length;
    return (
        <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Tarefas Criadas</p>
                <span>{tasksQuantify}</span>
            </div>

            <div>
                <p className={styles.textPurple}>Concluídas</p>
                <span>{completedTasks} de {tasksQuantify}</span>
            </div>
        </header>

        <div className={styles.list}>
            {tasks.map((task) => 
            <Task key={task.id} task= {task}/>
            )}
        </div>
        </section>
    )
}