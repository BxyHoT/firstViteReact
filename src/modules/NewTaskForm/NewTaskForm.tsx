import { Component, ChangeEvent } from "react";
import "../../App.css";
import { IHandleFunctionsByText } from "../Header/Header";

export class NewTaskForm extends Component<IHandleFunctionsByText> {
  state = { inputValue: "" };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  setInputValue = () => {
    this.setState({ inputValue: "" });
  };

  render() {
    const { inputValue } = this.state;
    const { handlePushTask } = this.props;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={this.onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handlePushTask(inputValue);
            this.setInputValue();
          }
        }}
      />
    );
  }
}
