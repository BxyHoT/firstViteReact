import "../../App.css";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { Component } from "react";
import { HandleFunctionsWithDate } from "../../App";

export interface IHandleFunctionsByText {
  handlePushTask: HandleFunctionsWithDate;
}

export class Header extends Component<IHandleFunctionsByText> {
  render() {
    const { handlePushTask } = this.props;

    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm handlePushTask={handlePushTask} />
      </header>
    );
  }
}
