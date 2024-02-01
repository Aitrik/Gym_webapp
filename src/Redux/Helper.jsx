import axios from "axios";

const adminUrl = "https://corefitserver.onrender.com";

export const baseURL = adminUrl;

const axiosInstance = axios.create(
    {
        baseURL,
    }
);

export const blogpic=(media)=>{
    return(
      `https://corefitserver.onrender.com/${media}`
    )
  }

  export const profile_pic=(media)=>{
    return (
        `https://corefitserver.onrender.com/uploads/review_4.png-1705678040008.png"`
    )
  }
  
axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token")
        if (token !== null || token !== undefined) {
            config.headers["x-access-token"] = token
        }
        return config
    },
    function (error) {
       
        console.log(error)
    }
)
export default axiosInstance;