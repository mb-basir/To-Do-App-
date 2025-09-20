import NavBar from "./components/NavBar";
import Form from "./components/Form";
import PackingTasks from "./components/PackingTasks";
import Statistics from "./components/Statistics";
import { useEffect, useState } from "react";

export default function App() {
  // const [tasks, setTasks] = useState([]);

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("task");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
    console.log(tasks);
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function setCompleted(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
    console.log(tasks);
  }

  function setNotCompleted(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: false } : task
      )
    );
  }

  //????    Store Task in Local Storage     ????//
  useEffect(
    function () {
      localStorage.setItem("task", JSON.stringify(tasks));
    },
    [tasks]
  );

  return (
    <div className="w-90% h-[90vh] grid grid-rows-[auto_auto_1fr_auto] mx-[5%] mt-12 rounded-2xl bg-[#EDB3B3] ">
      <NavBar />
      <Form onAddTasks={handleAddTasks} />
      <PackingTasks
        tasks={tasks}
        onDeleteTasks={handleDeleteTask}
        onSetCompleted={setCompleted}
        onSetNotCompleted={setNotCompleted}
      />
      <Statistics tasks={tasks} />
    </div>
  );
}
