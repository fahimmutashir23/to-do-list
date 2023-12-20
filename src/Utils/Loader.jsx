import { Circles } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const Loader = ({ h, w, color, align }) => {
  return (
    <div className={`flex justify-${align}`}>
      <Circles
        height={h}
        width={w}
        color={color}
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
