import { Component } from "react";
import "../../App.css";

export class NewTaskForm extends Component {
  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    );
  }
}
