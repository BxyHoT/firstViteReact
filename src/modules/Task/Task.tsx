import "../../App.css";
import { formatDistanceToNow } from "date-fns";

export const Task = ({
  content,
  isDone,
  handleChangeDone,
  id,
}: {
  id: number;
  content: string;
  isDone: boolean;
  handleChangeDone: (id: number) => void;
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
      <button className="icon icon-destroy"></button>
    </div>
  );
};
