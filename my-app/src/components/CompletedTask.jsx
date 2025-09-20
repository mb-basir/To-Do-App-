import { useTodo } from "../contexts/Context";

export default function CompletedTask() {
  const { tasks } = useTodo();
  const completed = tasks.filter((task) => task.completed === true).length;
  if (completed === 0) return;
  return (
    <div>
      <div className="flex items-center mt-5">
        <p className="inline px-4 py-2  rounded-full ml-20 bg-[#F39E60] text-base font-medium ">
          Completed
        </p>
        <hr className="flex-1 border-dashed border-t-2 border-black-100 mr-15 " />
      </div>
      <ul className=" grid my-4 lg:grid-cols-2 md:grid-cols-1 gap-x-16 content-start justify-center px-15 ">
        {tasks
          .filter((task) => task.completed === true)
          .map((t) => (
            <Done task={t} key={t.id} />
          ))}
      </ul>
    </div>
  );
}

function Done({ task }) {
  const { setNotCompleted, handleDeleteTask } = useTodo();

  return (
    <li className=" text-base text-gray-500 font-medium text-start content-center px-6 py-0.5 flex justify-between items-center sm:gap-30">
      <div>
        <svg
          onClick={() => setNotCompleted(task.id)}
          className="inline-block pb-1 cursor-pointer hover:fill-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#999999"
        >
          <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
        </svg>
        <span className="ml-2 text-lg">{task.description}</span>
      </div>
      <div className="flex justify-between items-center gap-x-1">
        <p className="text-sm w-22 text-center text-red-100 bg-gray-400  py-2 rounded-4xl">
          {task.time}
        </p>
        <p className=" text-sm w-22 text-center text-red-100  bg-gray-400 py-2 rounded-4xl ">
          {task.priority}
        </p>
        <button
          onClick={() => handleDeleteTask(task.id)}
          className="bg- px-5 bg-gray-400 text-3xl align-text-top transition duration-300 rounded-full text-red-500 hover:text-red-700 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </li>
  );
}
