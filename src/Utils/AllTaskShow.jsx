/* eslint-disable react/prop-types */

import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const AllTaskShow = ({ toDo, idx }) => {
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <a data-tooltip-id="my-tooltip" data-tooltip-content={toDo.description}>
          <td>{toDo.title}</td>
        </a>
        <td>{toDo.date}</td>
      </tr>
      <Tooltip id="my-tooltip"></Tooltip>
    </>
  );
};

export default AllTaskShow;
