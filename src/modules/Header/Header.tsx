import "../../App.css";
import { NewTaskForm } from "../NewTaskForm/NewTaskForm";

export const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm />
    </header>
  );
};
