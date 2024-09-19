import "../../App.css";
import { Component } from "react";
import { Task } from "../Task/Task";
import { HandleFunctionsById } from "../../App";
import { ITask } from "../../App";

interface ITaskListItem extends ITask {
  handleChangeDone: HandleFunctionsById;
  handleTaskDelete: HandleFunctionsById;
  handleOnRunning: HandleFunctionsById;
  handleEditing: HandleFunctionsById;
  handleChangeTask: (id: number, text: string) => void;
}

export class TaskListItem extends Component<ITaskListItem> {
  state = {
    inputValue: this.props.content,
  };

  classToggle = (isDone: boolean, isEditing: boolean) => {
    if (isEditing && isDone) return "completed editing";
    if (isEditing && !isDone) return "editing";
    if (!isEditing && isDone) return "completed";

    return "";
  };

  render() {
    const {
      handleChangeDone,
      handleTaskDelete,
      handleChangeTask,
      handleEditing,
      handleOnRunning,
      isDone,
      isEditing,
      id,
      content,
      time,
      createdTime,
    } = this.props;
    const { inputValue } = this.state;

    return (
      <li className={this.classToggle(isDone, isEditing)}>
        <Task
          id={id}
          content={content}
          isDone={isDone}
          handleChangeDone={handleChangeDone}
          handleTaskDelete={handleTaskDelete}
          handleEditing={handleEditing}
          time={time}
          createdTime={createdTime}
          handleOnRunning={handleOnRunning}
        />
        <input
          type="text"
          className="edit"
          value={inputValue}
          onChange={(e) => {
            this.setState(() => {
              return { inputValue: e.target.value };
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleChangeTask(id, inputValue);
              this.setState({ isEditing: false });
            }
          }}
        />
      </li>
    );
  }
}
