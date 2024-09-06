import { Component, ReactNode } from "react";
import "../../App.css";
import { TaskFilter } from "../TaskFilter/TaskFilter";

interface IFooter {
  taskLength: number;
}

export class Footer extends Component<IFooter> {
  render(): ReactNode {
    const { taskLength } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">{taskLength} items left</span>
        <TaskFilter />
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}
