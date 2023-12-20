import useAuth from "../../Hooks/useAuth";
import AddTaskModal from "../../Utils/AddTaskModal";

const DashboardNav = () => {
  const { user } = useAuth();
  return (
    <div className="bg-black rounded-md p-2 flex justify-between items-center border-b-[1px] border-green-700">
      <div>
        <ul>
          <AddTaskModal id="my_modal_1"></AddTaskModal>
          <li
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="bg-blue-500 px-2 rounded-md text-black cursor-pointer hover:bg-green-700"
          >
            New
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl text text-blue-500 font-semibold">Dashboard</h1>
      </div>
      <div>
        <img
          src={user?.photoURL}
          alt="profile"
          className="h-14 w-14 rounded-md border-green-700 border-[1px]"
        />
      </div>
    </div>
  );
};

export default DashboardNav;
