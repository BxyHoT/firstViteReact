import { Component, ReactNode } from "react";
import "../../App.css";
import { TaskFilter } from "../TaskFilter/TaskFilter";

interface IFooter {
  taskLength: number;
  handleClearCompleted: () => void;
  handleGetActiveTasks: () => void;
  handleGetAllTasks: () => void;
  handleGetCompletedTasks: () => void;
  isActive: boolean;
  isAll: boolean;
  isCompleted: boolean;
}

export class Footer extends Component<IFooter> {
  render(): ReactNode {
    const {
      taskLength,
      handleClearCompleted,
      handleGetActiveTasks,
      handleGetAllTasks,
      handleGetCompletedTasks,
      isActive,
      isAll,
      isCompleted,
    } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{taskLength} items left</span>
        <TaskFilter
          handleGetActiveTasks={handleGetActiveTasks}
          handleGetAllTasks={handleGetAllTasks}
          handleGetCompletedTasks={handleGetCompletedTasks}
          isActive={isActive}
          isAll={isAll}
          isCompleted={isCompleted}
        />
        <button
          className="clear-completed"
          onClick={() => {
            handleClearCompleted();
          }}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}
