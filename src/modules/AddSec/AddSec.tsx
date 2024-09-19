import "../../App.css";
import { ChangeEvent, Component, ReactNode } from "react";

interface IAddSecProps {
  setSec: (sec: string) => void;
  isSend: boolean;
}

export class AddSec extends Component<IAddSecProps> {
  state = {
    inputValue: "",
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue === "" || (Number(newValue) >= 0 && Number(newValue) <= 59)) {
      this.setState({ inputValue: newValue });
      this.props.setSec(newValue);
    }
  };

  componentDidUpdate(): void {
    if (this.props.isSend && this.state.inputValue !== "") {
      this.setState({ inputValue: "" });
    }
  }

  render(): ReactNode {
    const { inputValue } = this.state;

    return (
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        type="number"
        autoFocus
        min={0}
        max={59}
        value={inputValue}
        onChange={this.handleChange}
      />
    );
  }
}
