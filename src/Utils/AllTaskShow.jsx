/* eslint-disable react/prop-types */


const AllTaskShow = ({ toDo, idx }) => {
  return (
    <>
      <tr>
        <td>{idx + 1}</td>
        <td>
          <div className="tooltip" data-tip={toDo.description}>
            <button>{toDo.title}</button>
          </div>
        </td>
        <td>{toDo.date}</td>
      </tr>
    </>
  );
};

export default AllTaskShow;
