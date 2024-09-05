import "../../App.css";
import { Task } from "../Task/Task";
import { ITask, HandleFunctions } from "../../App";
import { Component } from "react";

interface ITasksListProps {
  tasksArray: ITask[];
  handleChangeDone: HandleFunctions;
  handleTaskDelete: HandleFunctions;
}

export class TaskList extends Component<ITasksListProps> {
  render() {
    const { tasksArray, handleChangeDone, handleTaskDelete } = this.props;

    const tasks = tasksArray.map((task) => {
      const { id, content, isDone } = task;

      return (
        <li className={isDone ? "completed" : ""} key={id}>
          <Task
            id={id}
            content={content}
            isDone={isDone}
            handleChangeDone={handleChangeDone}
            handleTaskDelete={handleTaskDelete}
          />
        </li>
      );
    });

    return <ul className="todo-list">{tasks}</ul>;
  }
}
