import NavBar from "./components/NavBar";
import Form from "./components/Form";
import PackingTasks from "./components/PackingTasks";
import Statistics from "./components/Statistics";
import { Provider } from "./contexts/Context";

export default function App() {
  return (
    <Provider>
      <div className="w-90% h-[90vh] grid grid-rows-[auto_auto_1fr_auto] mx-[5%] mt-12 rounded-2xl bg-[#EDB3B3] ">
        <NavBar />
        <Form />
        <PackingTasks />
        <Statistics />
      </div>
    </Provider>
  );
}
