import "./App.css";
import { Header } from "./modules/Header/Header";
import { TaskList, Task } from "./modules/TaskList/TaskList";
import { Footer } from "./modules/Footer/Footer";

function App() {
  const tasksArray: Task[] = [
    { id: 1, content: "жоское дело" },
    { id: 2, content: "жоское дело" },
    { id: 3, content: "жоское дело" },
  ];
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <TaskList tasksArray={tasksArray}></TaskList>
        <Footer />
      </section>
    </section>
  );
}

export default App;
