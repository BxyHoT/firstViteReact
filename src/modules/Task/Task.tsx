import "../../App.css";
import { formatDistanceToNow } from "date-fns";
import { HandleFunctions } from "../../App";

export const Task = ({
  content,
  isDone,
  handleChangeDone,
  id,
  handleTaskDelete,
}: {
  id: number;
  content: string;
  isDone: boolean;
  handleChangeDone: HandleFunctions;
  handleTaskDelete: HandleFunctions;
}) => {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={isDone}
        onChange={() => {
          handleChangeDone(id);
        }}
      />
      <label>
        <span className="description">{content}</span>
        <span className="created">{formatDistanceToNow(new Date())}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button
        className="icon icon-destroy"
        onClick={() => handleTaskDelete(id)}
      ></button>
    </div>
  );
};
