import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import DashboardNav from "./DashboardNav";

const Dashboard = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    axiosSecure(`/toDos?email=${user?.email}`)
    .then(res=> {
        console.log(res.data);
    })
  return (
    <div>
      <DashboardNav></DashboardNav>
      <div className="flex justify-between gap-2 mt-2">
        <div className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md">
          <div className="divider divider-primary px-2 text-2xl">To-do</div>
          <div>
            <ul>

            </ul>
          </div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md">
          <div className="divider divider-primary px-2 text-2xl">On Going</div>
          <div></div>
        </div>
        <div className="flex-1 bg-gradient-to-r from-black text-xl py-2 rounded-md">
          <div className="divider divider-primary px-2 text-2xl">Completed</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
