import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useTodos = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth()

    const { data: toDos = [], refetch} = useQuery({
        queryKey: ["toDos"],
        queryFn: async () => {
          const res = await axiosSecure(`/toDos?email=${user?.email}`);
          return res.data;
        },
      });
    return [toDos, refetch ]
};

export default useTodos;