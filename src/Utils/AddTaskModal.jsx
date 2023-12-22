import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Loader from "./Loader";
import { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import useTodos from "../Hooks/useTodos";

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [refetch] = useTodos()

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    const toDos = {
      email: user?.email,
      title: data.title,
      description: data.description,
      date: data.date,
      priority: data.priority,
      status: "toDo"
    };
    axiosSecure.post("/toDos", toDos).then((res) => {
      if (res.data.insertedId) {
        toast("Task added Successfully");
      }
    });
    axiosSecure.post("/previous", toDos)
    refetch()

    setLoading(false);
    reset();
  };

  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box max-w-3xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center text-2xl font-semibold mb-2">
                Add Task
              </h1>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  {...register("title")}
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title
                </label>
              </div>

              <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                {...register("description")}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
              ></textarea>
              <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 dark:text-white">
                Set Deadline
              </label>
              <input
                className="mb-2 w-full px-4 py-2 rounded-md bg-gray-700"
                type="date"
                {...register("date")}
              />
              <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 dark:text-white">
                Priority
              </label>
              <select
                className="px-4 py-2 rounded-md bg-gray-700 w-full mb-4"
                {...register("priority")}
              >
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
              </select>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "150px", display: "block", margin: "auto" }}
              >
                {loading ? (
                  <Loader h="25" w="25" color="white"></Loader>
                ) : (
                  "Set Task"
                )}
              </Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTaskModal;
