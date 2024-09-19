import { Component, ReactNode } from "react";
import "../../App.css";

interface ITimerProps {
  isDone: boolean;
  time: Date;
  id: number;
  handleOnRunning: (id: number) => void;
}

interface ITimerState {
  isRunning: boolean;
  time: string;
}

export class Timer extends Component<ITimerProps, ITimerState> {
  interval: number | undefined = undefined;

  state = {
    isRunning: false,
    time: this.props.time.toLocaleTimeString().slice(3),
  };

  onRunning = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });

      this.interval = setInterval(() => {
        this.props.handleOnRunning(this.props.id);
      }, 1000);
    }
  };

  offRunnig = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  componentDidUpdate(prevProps: Readonly<ITimerProps>): void {
    if (prevProps.time !== this.props.time) {
      this.setState({ time: this.props.time.toLocaleTimeString().slice(3) });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(): ReactNode {
    const { time } = this.state;

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onRunning}></button>
        <button className="icon icon-pause" onClick={this.offRunnig}></button>
        <span style={{ marginLeft: 6 }}>{time}</span>
      </span>
    );
  }
}
