// const initialTasks = [
//   { id: 1, description: "react dev", completed: false, hour: "15:00" },
//   { id: 2, description: "el classico", completed: false, hour: "23:30" },
//   { id: 3, description: "tailwind css", completed: false, hour: "19:30" },

import { useTodo } from "../contexts/Context";
import CompletedTasks from "./CompletedTask";

export function PackingTasks() {
  const { tasks } = useTodo();
  return (
    <div className=" bg-[#ffd6ba] grid grid-rows-[1fr_auto] ">
      <ul className="grid mt-12 lg:grid-cols-2 sm:grid-cols-1 gap-x-16 content-start justify-center px-15">
        {tasks
          .filter((task) => task.completed === false)
          .map((t) => (
            <Task task={t} key={t.id} />
          ))}
      </ul>
      <CompletedTasks />
    </div>
  );
}

export default PackingTasks;
function Task({ task }) {
  const { setCompleted, handleDeleteTask } = useTodo();
  return (
    <li className=" text-base font-medium text-start content-center px-6  flex justify-between items-center">
      <div>
        <svg
          onClick={() => {
            setCompleted(task.id);
          }}
          className="inline pb-1 cursor-pointer transition duration-300 hover:fill-green-400 "
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z" />
        </svg>
        <span className="ml-1 text-lg">{task.description}</span>
      </div>
      <div className="flex justify-between items-center gap-x-1">
        <p className="text-base w-20 text-center  bg-indigo-300  py-1.5  rounded-4xl">
          {task.time}
        </p>
        <p
          className={` text-base w-22 text-orange-200 text-center py-1.5  rounded-4xl 
            ${task.priority === "High" ? "bg-[#e78585] " : ""}
            ${task.priority === "Low" ? "bg-[#659975]" : ""}
            ${task.priority === "Medium" ? "bg-[#F39F62]" : ""}
            `}
        >
          {task.priority}
        </p>
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="bg-[#79cc92] px-5 text-3xl align-text-top transition duration-300 rounded-full text-red-500 hover:text-red-700 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </li>
  );
}
