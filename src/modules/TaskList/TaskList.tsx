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
  handleOnRunning: HandleFunctionsById;
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
      handleOnRunning,
    } = this.props;

    if (tasksArray.length === 0) return <></>;

    const tasks = tasksArray.map((task) => {
      const { id, content, isDone, isEditing, time, createdTime } = task;

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
          handleOnRunning={handleOnRunning}
          key={id}
          time={time}
          createdTime={createdTime}
        ></TaskListItem>
      );
    });

    return <ul className="todo-list">{tasks}</ul>;
  }
}
