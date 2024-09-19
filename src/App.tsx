import "./App.css";
import { Header } from "./modules/Header/Header";
import { TaskList } from "./modules/TaskList/TaskList";
import { Footer } from "./modules/Footer/Footer";
import React from "react";

export interface ITask {
  id: number;
  content: string;
  isDone: boolean;
  isEditing: boolean;
  time: Date;
  createdTime: Date;
}

interface ITaskListState {
  tasksArray: ITask[] | [];
  isActive: boolean;
  isCompleted: boolean;
  isAll: boolean;
}

export type HandleFunctionsById = (id: number) => void;
export type HandleFunctionsByText = (text: string) => void;
export type HandleFunctionsWithDate = (
  text: string,
  min: string,
  sec: string
) => void;

class App extends React.Component<object, ITaskListState> {
  constructor(props: object) {
    super(props);
  }
  maxId = 100;

  createTask = (text: string, min: string = "0", sec: string = "0") => {
    return {
      id: this.maxId++,
      isDone: false,
      content: text,
      isEditing: false,
      time: new Date(2024, 0, 1, 0, Number(min), Number(sec)),
      createdTime: new Date(),
    };
  };

  state = {
    tasksArray: [
      this.createTask("Task 1"),
      this.createTask("Task 2"),
      this.createTask("Task 3"),
    ],
    isActive: false,
    isCompleted: false,
    isAll: true,
  };

  handleOnRunning = (id: number) => {
    this.setState(({ tasksArray }) => {
      const updateTasksArray = tasksArray.map((task) => {
        return task.id === id
          ? {
              ...task,
              time: new Date(task.time.setSeconds(task.time.getSeconds() + 1)),
            }
          : task;
      });

      return { tasksArray: updateTasksArray };
    });
  };

  handlePushTusk = (text: string, min: string, sec: string) => {
    this.setState(({ tasksArray }) => {
      const updateTasksArray = [...tasksArray, this.createTask(text, min, sec)];

      return { tasksArray: updateTasksArray };
    });
  };

  getActiveTasks = () => {
    const tasksArray = this.state.tasksArray;
    const doneTasksArray = tasksArray.filter(({ isDone }) => !isDone);

    return doneTasksArray;
  };

  getDonesTasks = () => {
    const tasksArray = this.state.tasksArray;
    const activeTasksArray = tasksArray.filter(({ isDone }) => isDone);

    return activeTasksArray;
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

  handleClearCompleted = () => {
    const activeTasks = this.getActiveTasks();

    this.setState(() => {
      return {
        tasksArray: activeTasks,
      };
    });
  };

  handleGetActiveTasks = () => {
    this.setState(() => {
      return {
        isActive: true,
        isAll: false,
        isCompleted: false,
      };
    });
  };

  handleGetAllTasks = () => {
    this.setState(() => {
      return {
        isActive: false,
        isAll: true,
        isCompleted: false,
      };
    });
  };

  handleGetCompletedTasks = () => {
    this.setState(() => {
      return {
        isActive: false,
        isAll: false,
        isCompleted: true,
      };
    });
  };

  handleChangeTask = (id: number, text: string) => {
    this.setState(({ tasksArray }) => {
      const taskChangeIndex = tasksArray.findIndex((task) => task.id === id);
      const { ...updateTask } = tasksArray[taskChangeIndex];
      updateTask.content = text;
      updateTask.isEditing = false;

      const updateArray = [
        ...tasksArray.slice(0, taskChangeIndex),
        updateTask,
        ...tasksArray.slice(taskChangeIndex + 1),
      ];

      return { tasksArray: updateArray };
    });
  };

  handleEditing = (id: number) => {
    this.setState(({ tasksArray }) => {
      const taskEditingIndex = tasksArray.findIndex((task) => task.id === id);
      const { ...taskEditingUpdate } = tasksArray[taskEditingIndex];
      taskEditingUpdate.isEditing = true;
      const updateArray = [
        ...tasksArray.slice(0, taskEditingIndex),
        taskEditingUpdate,
        ...tasksArray.slice(taskEditingIndex + 1),
      ];

      return { tasksArray: updateArray };
    });
  };

  render() {
    const { tasksArray, isActive, isAll, isCompleted } = this.state;

    const checkFilter = () => {
      if (isAll) return tasksArray;
      if (isActive) return this.getActiveTasks();
      if (isCompleted) return this.getDonesTasks();
      return tasksArray;
    };

    return (
      <section className="todoapp">
        <Header handlePushTask={this.handlePushTusk} />
        <section className="main">
          <TaskList
            tasksArray={checkFilter()}
            handleChangeDone={this.handleChangeDone}
            handleTaskDelete={this.handleTaskDelete}
            handleChangeTask={this.handleChangeTask}
            handleEditing={this.handleEditing}
            handleOnRunning={this.handleOnRunning}
          ></TaskList>
          <Footer
            taskLength={this.getActiveTasks().length}
            handleClearCompleted={this.handleClearCompleted}
            handleGetActiveTasks={this.handleGetActiveTasks}
            handleGetAllTasks={this.handleGetAllTasks}
            handleGetCompletedTasks={this.handleGetCompletedTasks}
            isActive={isActive}
            isAll={isAll}
            isCompleted={isCompleted}
          />
        </section>
      </section>
    );
  }
}

export default App;
