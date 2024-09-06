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

export type HandleFunctionsById = (id: number) => void;
export type HandleFunctionsByText = (text: string) => void;

class App extends React.Component<object, ITaskListState> {
  constructor(props: object) {
    super(props);
  }
  maxId = 100;

  createTask = (text: string) => {
    return { id: this.maxId++, isDone: false, content: text };
  };

  state = {
    tasksArray: [
      this.createTask("Task 1"),
      this.createTask("Task 2"),
      this.createTask("Task 3"),
    ],
  };

  handlePushTusk = (text: string) => {
    this.setState(({ tasksArray }) => {
      const updateTasksArray = [...tasksArray, this.createTask(text)];

      return { tasksArray: updateTasksArray };
    });
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
        <Header handlePushTask={this.handlePushTusk} />
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
