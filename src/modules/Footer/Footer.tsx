import "../../App.css";
import { TaskFilter } from "../TaskFilter/TaskFilter";

export const Footer = ({ taskLength }: { taskLength: number }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{taskLength} items left</span>
      <TaskFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};
