import "../../App.css";
import { formatDistanceToNow } from "date-fns";
import { HandleFunctionsById } from "../../App";
import { Component } from "react";
import { Timer } from "../Timer/Timer";

interface ITaskProps {
  id: number;
  content: string;
  isDone: boolean;
  time: Date;
  createdTime: Date;
  handleEditing: HandleFunctionsById;
  handleChangeDone: HandleFunctionsById;
  handleTaskDelete: HandleFunctionsById;
  handleOnRunning: HandleFunctionsById;
}

interface ITaskState {
  createdTime: null | string;
}

export class Task extends Component<ITaskProps, ITaskState> {
  interval: undefined | number = undefined;

  state = { createdTime: null };

  componentDidMount(): void {
    this.setState({ createdTime: formatDistanceToNow(this.props.createdTime) });

    this.interval = setInterval(() => {
      this.setState({
        createdTime: formatDistanceToNow(this.props.createdTime),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {
      id,
      content,
      isDone,
      handleChangeDone,
      handleTaskDelete,
      handleEditing,
      handleOnRunning,
      time,
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
          <span className="title">{content}</span>
          <Timer
            isDone={isDone}
            time={time}
            id={id}
            handleOnRunning={handleOnRunning}
          />
          <span className="description">{this.state.createdTime}</span>
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
