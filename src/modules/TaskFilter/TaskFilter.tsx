import { Component } from "react";
import "../../App.css";

interface ITaskFilter {
  handleGetActiveTasks: () => void;
  handleGetAllTasks: () => void;
  handleGetCompletedTasks: () => void;
  isActive: boolean;
  isAll: boolean;
  isCompleted: boolean;
}
export class TaskFilter extends Component<ITaskFilter> {
  render() {
    const {
      handleGetActiveTasks,
      isActive,
      isAll,
      isCompleted,
      handleGetAllTasks,
      handleGetCompletedTasks,
    } = this.props;

    return (
      <ul className="filters">
        <li>
          <button
            className={isAll ? "selected" : ""}
            onClick={() => {
              handleGetAllTasks();
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={isActive ? "selected" : ""}
            onClick={() => {
              handleGetActiveTasks();
            }}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={isCompleted ? "selected" : ""}
            onClick={() => {
              handleGetCompletedTasks();
            }}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
