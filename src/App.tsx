import "./App.css";
import { Header } from "./modules/Header/Header";
import { TaskList } from "./modules/TaskList/TaskList";
import { Footer } from "./modules/Footer/Footer";
// import { useState } from "react";
import React from "react";

interface Task {
  id: number;
  content: string;
  isDone: boolean;
  isDeleted: boolean;
}

export interface TaskListState {
  tasksArray: Task[];
}

class App extends React.Component<object, TaskListState> {
  constructor(props: object) {
    super(props);
    this.state = {
      tasksArray: [
        { id: 1, content: "Task 1", isDone: false, isDeleted: false },
        { id: 2, content: "Task 2", isDone: false, isDeleted: false },
        { id: 3, content: "Task 3", isDone: false, isDeleted: false },
      ],
    };
  }

  handleChangeDone = (id: number) => {
    this.setState(({ tasksArray }) => {
      const updatedTasks = tasksArray.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );

      return { tasksArray: updatedTasks };
    });
  };

  render() {
    const { tasksArray } = this.state;

    return (
      <section className="todoapp">
        <Header />
        <section className="main">
          <TaskList
            tasksArray={tasksArray}
            handleChangeDone={this.handleChangeDone}
          ></TaskList>
          <Footer taskLength={tasksArray.length} />
        </section>
      </section>
    );
  }
}

export default App;
