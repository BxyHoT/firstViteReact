import "../../App.css";
import { ChangeEvent, Component, ReactNode } from "react";

interface IAddMinProps {
  setMin: (min: string) => void;
  isSend: boolean;
}

export class AddMinutes extends Component<IAddMinProps> {
  state = {
    inputValue: "",
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    if (newValue === "" || (Number(newValue) >= 0 && Number(newValue) <= 30)) {
      this.setState({ inputValue: newValue });
      this.props.setMin(newValue);
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
        placeholder="Min"
        autoFocus
        type="number"
        max="30"
        min="0"
        value={inputValue}
        onChange={this.handleChange}
      />
    );
  }
}
