import { Component, ReactNode } from "react";
import "../../App.css";

interface ITimerState {
  time: Date;
  isRunning: boolean;
}

export class Timer extends Component<object, ITimerState> {
  state = {
    time: new Date(2024, 0, 1, 0, 0, 0),
    isRunning: false,
  };

  interval: number | undefined = undefined;

  onRunning = () => {
    if (!this.state.isRunning) {
      this.setState({ isRunning: true });

      this.interval = setInterval(() => {
        this.setState(({ time }) => {
          const updateTime = new Date(time);

          updateTime.setSeconds(updateTime.getSeconds() + 1);

          return { time: updateTime };
        });
      }, 1000);
    }
  };

  offRunnig = () => {
    clearInterval(this.interval);
    this.setState({ isRunning: false });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(): ReactNode {
    const { time } = this.state;

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.onRunning}></button>
        <button className="icon icon-pause" onClick={this.offRunnig}></button>
        <span style={{ marginLeft: 6 }}>
          {time.toLocaleTimeString().slice(3)}
        </span>
      </span>
    );
  }
}
