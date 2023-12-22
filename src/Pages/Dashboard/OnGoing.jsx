import { useDrop } from "react-dnd";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import ToDoList from "../../Components/DashboardUtils/ToDoList";
import useTodos from "../../Hooks/useTodos";

const OnGoing = () => {
  const axiosSecure = useAxiosSecure();
  const [toDos, refetch] = useTodos();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "object",
    drop: (item) => handleDrop(item.toDo),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleDrop = async (item) => {
    const res = await axiosSecure.patch(`/update/${item._id}?status=onGoing`);
    if (res.data) {
      toast("Good job, Task is OnGoing");
      refetch();
    }
  };
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="1500"
      ref={drop}
      className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md"
    >
      <div className="divider divider-primary px-2 text-2xl">On Going</div>
      <div className="p-2">
        <ul className="space-y-2">
          {toDos?.map(
            (toDo, idx) =>
              toDo.status === "onGoing" && (
                <ToDoList key={idx} toDo={toDo} idx={idx}></ToDoList>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default OnGoing;
