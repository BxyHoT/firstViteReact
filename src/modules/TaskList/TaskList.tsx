import "../../App.css";
import { Task } from "../Task/Task";
import { ITask, HandleFunctionsById } from "../../App";
import { Component } from "react";

interface ITasksListProps {
  tasksArray: ITask[] | [];
  handleChangeDone: HandleFunctionsById;
  handleTaskDelete: HandleFunctionsById;
}

export class TaskList extends Component<ITasksListProps> {
  render() {
    const { tasksArray, handleChangeDone, handleTaskDelete } = this.props;

    if (tasksArray.length === 0) return <></>;

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
