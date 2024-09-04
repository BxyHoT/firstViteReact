import "../../App.css";
import { Task } from "../Task/Task";
import { TaskListState } from "../../App";

export const TaskList = ({
  tasksArray,
  handleChangeDone,
}: {
  tasksArray: TaskListState["tasksArray"];
  handleChangeDone: (id: number) => void;
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
        />
      </li>
    );
  });

  return <ul className="todo-list">{tasks}</ul>;
};
