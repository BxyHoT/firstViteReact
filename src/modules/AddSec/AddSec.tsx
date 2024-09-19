import "../../App.css";
import { Component, ReactNode } from "react";

export class AddSec extends Component {
  render(): ReactNode {
    return (
      <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
    );
  }
}
