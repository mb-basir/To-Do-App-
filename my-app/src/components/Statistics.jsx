import { useTodo } from "../contexts/Context";

export function Statistics() {
  const { tasks } = useTodo();
  const numTasks = tasks.length;
  const numCompleted = tasks.filter((task) => task.completed === true).length;
  const percentage = Math.round((numCompleted / numTasks) * 100);
  if (numTasks === 0)
    return (
      <div className="bg-[#EDB3B3] py-6 flex items-center justify-center overflow-hidden rounded-br-2xl rounded-bl-2xl text-xl font-semibold ">
        <p>📝 Add your tasks for today ✨</p>
      </div>
    );
  return (
    <div className="bg-[#EDB3B3] py-6 flex items-center justify-center overflow-hidden rounded-br-2xl rounded-bl-2xl text-xl font-semibold ">
      {percentage === 0 ? (
        <p>🎯 "You haven’t completed any tasks yet. Try finishing one!🚀"</p>
      ) : (
        <>
          {percentage === 100 ? (
            <p>Awesome job! 🎉 You've finished all your tasks! 🎯</p>
          ) : (
            <p>
              🚀 You've completed {numCompleted} out of {numTasks} tasks (
              {percentage}%) — keep going! 🍹
            </p>
          )}
        </>
      )}
    </div>
  );
}
export default Statistics;
