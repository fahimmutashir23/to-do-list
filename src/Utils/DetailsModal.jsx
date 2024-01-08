/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Box, Modal } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import EditForm from "./EditForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  width: 400,
  border: "1px solid white",
  boxShadow: 24,
  p: 2,
};

const DetailsModal = ({ toDoDetails, open, setOpen, refetch }) => {
  const handleClose = () => setOpen(false);
  const axiosSecure = useAxiosSecure();
  const [form, setForm] = useState(false);

  const handleDelete = (_id) => {
    axiosSecure.delete(`/deleteTask/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        toast("Delete successfully");
        refetch()
      }
    });
  };


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {form ? (
            <EditForm details={toDoDetails}></EditForm>
          ) : (
            <div>
              <h1 className="text-2xl font-semibold mb-2 border-b p-2 max-w-fit mx-auto rounded-md">
                To-Do Details
              </h1>
              <h1 className="text-center text-xl font-medium mb-2">
                {toDoDetails?.title}
              </h1>
              <p>
                <span className="text-blue-600 font-medium">Description :</span>{" "}
                {toDoDetails.description}
              </p>
              <p>
                <span className="text-blue-600 font-medium">Last Date :</span>{" "}
                {toDoDetails.date}
              </p>
              <p>
                <span className="text-blue-600 font-medium">Priority :</span>{" "}
                {toDoDetails.priority}
              </p>
              <div className="flex justify-between mt-3">
                <Button
                  onClick={() => handleDelete(toDoDetails._id)}
                  sx={{
                    fontSize: "10px",
                    padding: "2px 6px",
                    borderRadius: "2px",
                  }}
                  variant="contained"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => setForm(true)}
                  sx={{
                    fontSize: "10px",
                    padding: "2px 6px",
                    borderRadius: "2px",
                  }}
                  variant="contained"
                  startIcon={<Edit />}
                >
                  Modify
                </Button>
              </div>
            </div>
          )}
          {form? <h3 className="cursor-pointer px-2 border-[1px] max-w-fit mt-5 rounded-sm" onClick={()=>setForm(false)}>back to details</h3> : ""}
        </Box>
      </Modal>
    </div>
  );
};

DetailsModal.propTypes = {
  toDoDetails: PropTypes.object,
  open: PropTypes.boolean,
  setOpen: PropTypes.boolean,
};

export default DetailsModal;
