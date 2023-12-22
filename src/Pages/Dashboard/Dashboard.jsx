import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardNav from "./DashboardNav";
import ToDoList from "../../Components/DashboardUtils/ToDoList";
import { useDrop } from "react-dnd";
import useTodos from "../../Hooks/useTodos";

const Dashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [toDos] = useTodos()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "object",
    drop: (item) => addToDo(item.toDo),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addToDo = (toDo) => {
    const toDoInfo = {
      email: toDo.email,
      title: toDo.title,
      description: toDo.description,
      date: toDo.date,
      priority: toDo.priority
    }
    axiosSecure.post("/onGoing", toDoInfo);
  };


  const { data: onGoingData = [], refetch } = useQuery({
    queryKey: ["onGoing"],
    queryFn: async () => {
      const res = await axiosSecure(`/onGoing?email=${user?.email}`);
      return res.data;
    },
  });

  refetch()
  
  return (
    <div>
      <DashboardNav></DashboardNav>
      <div className="flex justify-between gap-2 mt-2">
        <div className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md">
          <div className="divider divider-primary px-2 text-2xl">To-do</div>
          <div className="p-2">
            <ul className="space-y-2">
              {toDos.map((toDo, idx) => (
                <ToDoList key={idx} toDo={toDo} idx={idx} refetch={refetch}></ToDoList>
              ))}
            </ul>
          </div>
        </div>

        <div
          ref={drop}
          className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md"
        >
          <div className="divider divider-primary px-2 text-2xl">On Going</div>
          <div>
            <ul className="space-y-2">
              {onGoingData?.map((toDo, idx) => (
                <ToDoList key={idx} toDo={toDo} idx={idx}></ToDoList>
              ))}
            </ul>
          </div>
        </div>

        <div ref={drop} className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md">
          <div className="divider divider-primary px-2 text-2xl">Completed</div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
