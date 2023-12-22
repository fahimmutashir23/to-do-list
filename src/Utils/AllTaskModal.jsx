import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import AllTaskShow from "./AllTaskShow";
import useAuth from "../Hooks/useAuth";

/* eslint-disable react/prop-types */
const AllTaskModal = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();

  const { data } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const res = await axiosSecure(`/previous?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <dialog id={id} className="modal">
        <div className="modal-box ">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-xl py-2 rounded-md">
            <div className="divider divider-primary px-2 text-2xl">
              Previous Task
            </div>
            <div className="p-2">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Sl</th>
                      <th>Title</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((toDo, idx) => (
                      <AllTaskShow
                        key={idx}
                        toDo={toDo}
                        idx={idx}
                      ></AllTaskShow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AllTaskModal;
