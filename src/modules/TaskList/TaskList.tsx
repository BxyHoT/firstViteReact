import "../../App.css";
import { ITask, HandleFunctionsById } from "../../App";
import { Component } from "react";
import { TaskListItem } from "../TaskListItem/TaskListItem";

interface ITasksListProps {
  tasksArray: ITask[] | [];
  handleChangeDone: HandleFunctionsById;
  handleTaskDelete: HandleFunctionsById;
  handleEditing: HandleFunctionsById;
  handleChangeTask: (id: number, text: string) => void;
}

export class TaskList extends Component<ITasksListProps> {
  state = {
    inputValue: "",
  };

  render() {
    const {
      tasksArray,
      handleChangeDone,
      handleTaskDelete,
      handleChangeTask,
      handleEditing,
    } = this.props;

    if (tasksArray.length === 0) return <></>;

    const tasks = tasksArray.map((task) => {
      const { id, content, isDone, isEditing } = task;

      return (
        <TaskListItem
          content={content}
          id={id}
          isDone={isDone}
          isEditing={isEditing}
          handleChangeDone={handleChangeDone}
          handleTaskDelete={handleTaskDelete}
          handleChangeTask={handleChangeTask}
          handleEditing={handleEditing}
          key={id}
        ></TaskListItem>
      );
    });

    return <ul className="todo-list">{tasks}</ul>;
  }
}
