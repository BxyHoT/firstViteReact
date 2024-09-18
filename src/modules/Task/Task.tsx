import "../../App.css";
import { formatDistanceToNow } from "date-fns";
import { HandleFunctionsById } from "../../App";
import { Component } from "react";
import { Timer } from "../Timer/Timer";

interface ITaskProps {
  id: number;
  content: string;
  isDone: boolean;
  handleEditing: HandleFunctionsById;
  handleChangeDone: HandleFunctionsById;
  handleTaskDelete: HandleFunctionsById;
}

export class Task extends Component<ITaskProps> {
  render() {
    const {
      id,
      content,
      isDone,
      handleChangeDone,
      handleTaskDelete,
      handleEditing,
    } = this.props;

    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isDone}
          onChange={() => {
            handleChangeDone(id);
          }}
        />
        <label>
          <span className="description">{content}</span>
          <Timer />
          <span className="description">{formatDistanceToNow(new Date())}</span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => {
            handleEditing(id);
          }}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => handleTaskDelete(id)}
        ></button>
      </div>
    );
  }
}
