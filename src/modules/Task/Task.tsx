import "../../App.css";
import { formatDistanceToNow } from "date-fns";
import { HandleFunctionsById } from "../../App";
import { Component } from "react";

interface ITaskProps {
  id: number;
  content: string;
  isDone: boolean;
  handleChangeDone: HandleFunctionsById;
  handleTaskDelete: HandleFunctionsById;
}

export class Task extends Component<ITaskProps> {
  render() {
    const { id, content, isDone, handleChangeDone, handleTaskDelete } =
      this.props;

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
          <span className="created">{formatDistanceToNow(new Date())}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => handleTaskDelete(id)}
        ></button>
      </div>
    );
  }
}
