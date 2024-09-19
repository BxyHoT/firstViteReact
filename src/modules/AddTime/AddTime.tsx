import { Component, ReactNode } from "react";
import "../../App.css";

export class Time extends Component {
  state = {
    inputValue: "",
  };

  render(): ReactNode {
    const { inputValue } = this.state;
    const { placeholder, max, min, handleChange } = this.props;

    return (
      <input
        className="new-todo-form__timer"
        placeholder={placeholder}
        autoFocus
        type="number"
        max={max}
        min={min}
        value={inputValue}
        onChange={handleChange}
      />
    );
  }
}
