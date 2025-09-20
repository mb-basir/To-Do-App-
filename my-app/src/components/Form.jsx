import { useEffect, useState } from "react";
import { useTodo } from "../contexts/Context";

export function Form() {
  const { handleAddTasks } = useTodo();
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const minute = `${now.getMinutes()}`.padStart(2, 0);

  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !priority) return;

    const newTask = {
      id: Date.now(),
      description,
      priority,
      completed: false,
      time: `${hour}:${minute}`,
    };

    handleAddTasks(newTask);
    setPriority("");
    setDescription("");
  }

  useEffect(function () {
    const el = document.querySelector(".search");
    console.log(el);
    el.focus();
  }, []);

  // useEffect(() => {
  //   const now = new Date();
  //   const hour = `${now.getHours()}`.padStart(2, 0);
  //   const minute = `${now.getMinutes()}`.padStart(2, 0);
  // }, []);
  return (
    <form
      className="bg-[#F39E60] py-3 flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold opacity-85">
        what do you want to do???
      </h3>
      <input
        type="text"
        placeholder="Add task..."
        className="search  text-sm bg-indigo-300 w-64 py-2.5 px-4 mx-2 rounded-4xl font-semibold outline-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={35}
      />
      {/* <p className="font-semibold ml-10"> priority: </p> */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className=" text-sm bg-indigo-300 py-2.5 px-1.5 rounded-4xl
      font-semibold styled-select"
      >
        <option value="" disabled className="hidden">
          Priority
        </option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button
        className="text-sm bg-[#369b62] py-2.5 px-5 mx-2 rounded-4xl text-white 
      font-semibold"
      >
        ADD
      </button>
    </form>
  );
}
export default Form;
