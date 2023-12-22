import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://to-do-server-three-vert.vercel.app"
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;