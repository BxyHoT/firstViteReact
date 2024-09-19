import { Component, ChangeEvent } from "react";
import "../../App.css";
import { IHandleFunctionsByText } from "../Header/Header";
import { AddMinutes } from "../AddMinutes/AddMinutes";
import { AddSec } from "../AddSec/AddSec";

export class NewTaskForm extends Component<IHandleFunctionsByText> {
  state = { inputValue: "", sec: "", min: "", isSend: false };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  setInputValue = () => {
    this.setState({ inputValue: "" });
  };

  setMin = (min: string) => {
    this.setState({ min });
  };

  setSec = (sec: string) => {
    this.setState({ sec });
  };

  render() {
    const { inputValue, min, sec, isSend } = this.state;
    const { handlePushTask } = this.props;

    return (
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={inputValue}
          onChange={this.onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handlePushTask(inputValue, min, sec);
              this.setInputValue();
              this.setState({ isSend: true });
              setTimeout(() => {
                this.setState({ isSend: false });
              }, 100);
            }
          }}
        />
        <AddMinutes setMin={this.setMin} isSend={isSend} />
        <AddSec setSec={this.setSec} isSend={isSend} />
      </form>
    );
  }
}
