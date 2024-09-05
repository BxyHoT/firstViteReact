import "./App.css";
import { Header } from "./modules/Header/Header";
import { TaskList } from "./modules/TaskList/TaskList";
import { Footer } from "./modules/Footer/Footer";
// import { useState } from "react";
import React from "react";

export interface ITask {
  id: number;
  content: string;
  isDone: boolean;
}

interface ITaskListState {
  tasksArray: ITask[];
}

export type HandleFunctions = (id: number) => void;

class App extends React.Component<object, ITaskListState> {
  constructor(props: object) {
    super(props);
  }

  state = {
    tasksArray: [
      { id: 1, content: "Task 1", isDone: false },
      { id: 2, content: "Task 2", isDone: false },
      { id: 3, content: "Task 3", isDone: false },
    ],
  };

  handleChangeDone = (id: number) => {
    this.setState(({ tasksArray }) => {
      const updatedTasks = tasksArray.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );

      return { tasksArray: updatedTasks };
    });
  };

  handleTaskDelete = (id: number) => {
    this.setState(({ tasksArray }) => {
      const taskDeletedIndex = tasksArray.findIndex((task) => task.id === id);
      const updateTasksArray = [
        ...tasksArray.slice(0, taskDeletedIndex),
        ...tasksArray.slice(taskDeletedIndex + 1),
      ];

      return {
        tasksArray: updateTasksArray,
      };
    });
  };

  getDonesTasks = () => {
    const tasksArray = this.state.tasksArray;
    const doneTasksArray = tasksArray.filter(({ isDone }) => !isDone);

    return doneTasksArray;
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
            handleTaskDelete={this.handleTaskDelete}
          ></TaskList>
          <Footer taskLength={this.getDonesTasks().length} />
        </section>
      </section>
    );
  }
}

export default App;
