import "../../App.css";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";
import { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
    );
  }
}
