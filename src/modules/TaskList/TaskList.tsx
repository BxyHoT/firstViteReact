import "../../App.css";
import { Task } from "../Task/Task";
import { ITask, HandleFunctions } from "../../App";

export const TaskList = ({
  tasksArray,
  handleChangeDone,
  handleTaskDelete,
}: {
  tasksArray: ITask[];
  handleChangeDone: HandleFunctions;
  handleTaskDelete: HandleFunctions;
}) => {
  const tasks = tasksArray.map((task) => {
    const { id, content, isDone } = task;

    return (
      <li className={isDone ? "completed" : ""} key={id}>
        <Task
          id={id}
          content={content}
          isDone={isDone}
          handleChangeDone={handleChangeDone}
          handleTaskDelete={handleTaskDelete}
        />
      </li>
    );
  });

  return <ul className="todo-list">{tasks}</ul>;
};
