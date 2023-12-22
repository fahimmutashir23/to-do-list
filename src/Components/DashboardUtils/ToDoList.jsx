import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import IconButton from "@mui/material/IconButton";
import { InfoOutlined } from "@mui/icons-material";
import DetailsModal from "../../Utils/DetailsModal";
import { useState } from "react";

const ToDoList = ({ toDo, idx, refetch }) => {
  const [open, setOpen] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "object",
    item: { toDo: toDo },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = () => {
    setOpen(true)
  };

  return (
    <>
      <li
        className={`${
          isDragging ? "border-[1px] border-blue-800" : "border-none"
        }`}
      >
        <div className="flex">
          <h4 ref={drag} className="flex-1">
            {idx + 1}. {toDo?.title}
          </h4>
          <IconButton
            onClick={()=> handleClick(toDo)}
            sx={{ color: "white" }}
          >
            <InfoOutlined />
          </IconButton>
        </div>
        <div className="w-full h-[1px] bg-slate-700"></div>
      </li>
      <DetailsModal open={open} setOpen={setOpen} toDoDetails={toDo} refetch={refetch}></DetailsModal>
    </>
  );
};

ToDoList.propTypes = {
  toDo: PropTypes.object,
  idx: PropTypes.number,
  refetch: PropTypes.func
};

export default ToDoList;
