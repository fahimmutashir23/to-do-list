import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardNav from "./DashboardNav";
import ToDoList from "../../Components/DashboardUtils/ToDoList";
import { useDrop } from "react-dnd";
import useTodos from "../../Hooks/useTodos";
import toast from "react-hot-toast";
import OnGoing from "./OnGoing";
import Complete from "./Complete";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const [toDos, refetch] = useTodos()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "object",
    drop: (item) => handleDrop(item.toDo),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleDrop = async (item) => {
    const res = await axiosSecure.patch(`/update/${item._id}?status=toDo`);
    if (res.data) {
      toast("Good job !")
      refetch()
    }
  };
  
  return (
    <div>
      <DashboardNav refetch={refetch}></DashboardNav>
      <div className="md:flex justify-between gap-2 mt-2">
        <div
        data-aos = "fade-right"
        data-aos-duration="1500"
        ref={drop}
        className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md">
          <div className="divider divider-primary px-2 text-2xl">To-do</div>
          <div className="p-2">
            <ul className="space-y-2">
              {toDos.map((toDo, idx) => (
                toDo.status === "toDo" &&
                <ToDoList refetch={refetch} key={idx} toDo={toDo} idx={idx}></ToDoList>
              ))}
            </ul>
          </div>
        </div>
        <OnGoing></OnGoing>
        <Complete></Complete>
      </div>
    </div>
  );
};

export default Dashboard;
