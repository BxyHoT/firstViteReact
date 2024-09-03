import "../../App.css";
import { formatDistanceToNow } from "date-fns";
export const Task = ({ content }: { content: string }) => (
  <div className="view">
    <input className="" type="checkbox" />
    <label>
      <span className="description">{content}</span>
      <span className="created">{formatDistanceToNow(new Date())}</span>
    </label>
    <button className="icon icon-edit"></button>
    <button className="icon icon-destroy"></button>
  </div>
);
