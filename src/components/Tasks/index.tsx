import { TbClipboardText } from 'react-icons/tb';
import { InterfaceTask } from '../../App'
import { Task } from '../Task'
import styles from './tasks.module.css'
interface Props {
    tasks: InterfaceTask[];
    onDelete: (taskId: string) =>void;
    onComplete:(taskId: string) =>void;
}
export function Tasks({tasks,onDelete,onComplete}: Props) {
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
            {tasks.map((task) =>( 
            <Task 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onComplete={onComplete}
            />
            ))}
            {tasks.length<= 0 && (
            <section className={styles.empty}>
                <TbClipboardText size={50}/>
                <div>
                    <p>
                        Você ainda não tem novas tarefas cadastradads
                    </p>
                    <span>
                        Crie tarefas e organize seus itens a fazer
                    </span>
                </div>
            </section>    
            )}
        </div>
        </section>
    )
}