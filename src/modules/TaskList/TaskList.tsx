import "../../App.css";
import { Task } from "../Task/Task";

export interface Task {
  id: number;
  content: string;
}

interface TasksListProps {
  tasksArray: Task[];
}

export const TaskList = ({ tasksArray }: TasksListProps) => {
  const tasks = tasksArray.map((task) => {
    const { id, content } = task;
    return (
      <li className="completed" key={id}>
        <Task content={content} />
      </li>
    );
  });
  return <ul className="todo-list">{tasks}</ul>;
};
