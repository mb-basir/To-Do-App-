import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

function Provider({ children }) {
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
    <Context.Provider
      value={{
        tasks,
        handleAddTasks,
        handleDeleteTask,
        setCompleted,
        setNotCompleted,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useTodo() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("Context was used outside the Provider");
  return context;
}
export { Provider, useTodo };
