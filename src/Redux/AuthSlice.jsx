import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    // redirectTo:null,
    isToggle: false,
    status: "idle",
    blogData: [],
    blogDet:[],
    review:[],
    team:[],
    services:[],
    serDet:[],
    banner:[],
    details:[]


};



export const register = createAsyncThunk(
    "/user/signup",


    // Action
    async (formData) => {
        let res = await axiosInstance.post(`/register`, formData);

        let resData = res?.data;

        return resData;
    }
);

export const login = createAsyncThunk(
    "/user/signin",


    async (formData) => {
        let res = await axiosInstance.post(`/login`, formData, {
            headers: {
                "Content-Type": "application/json", // adjust this based on your server expectations
            },
        })

        let resData = res?.data
        return resData;
    }
)

export const fetchBlogData = createAsyncThunk("blog/fetchBlogData",
    async () => {
        const response = await axiosInstance.get("/getblog");
        return response.data;
    });

    export const fetchBlogDetails = createAsyncThunk("fsingleBlog",
    async (id) => {
        const response = await axiosInstance.get(`getblogdetails/${id}`);
        return response.data;
    });

    export const Testimonials = createAsyncThunk("testimonials",
    async () => {
        const response = await axiosInstance.get(`/gettestimonial`);
        return response.data;
    });

    export const Team = createAsyncThunk("team",
    async () => {
        const response = await axiosInstance.get(`/gettrainer`);
        return response.data;
    });

    export const services = createAsyncThunk("services",
    async () => {
        const response = await axiosInstance.get(`/getservice`);
        return response.data;
    });

    export const servicedetails = createAsyncThunk("servicedet",
    async (id) => {
        const response = await axiosInstance.get(`/getservicedetails/${id}`);
        return response.data;
    });

    export const banner = createAsyncThunk("banner",
    async () => {
        const response = await axiosInstance.get(`/getbanner`);
        return response.data;
    });

    export const book = createAsyncThunk(
        "book",
    
    
        // Action
        async (formData) => {
            let res = await axiosInstance.post(`/booking`, formData,{
                headers: {
                    "Content-Type": "application/json", // adjust this based on your server expectations
                },
            })
    
    
            let resData = res?.data;
    
            return resData;
        }
    );

    export const detailsf = createAsyncThunk("details",
    async (id) => {
        const response = await axiosInstance.get(`/viewBooking/${id}`);
        return response.data;
    });


export const AuthSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        Token_remove: (state, { payload }) => {
            localStorage.removeItem("token");
            localStorage.removeItem("name")
            localStorage.removeItem("email");
            state.isToggle = false
            toast("Logged out successfully")
        },
        Check_Token: (state, { payload }) => {
            localStorage.getItem("token");
            state.isToggle = true;
        }
        ,
        // reset_redirectTo: (state, { payload }) => {
        //   state.redirectTo = payload;
        // },
    },

    // Promise 
    extraReducers: (builder) => {
        builder

            .addCase(register.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(register.fulfilled, (state, { payload }) => {
                state.status = "idle";

                toast(payload.message)
                // localStorage.setItem("profile_pic", payload.data.profile_pic)

                // state.redirectTo='/login'


            })
            .addCase(register.rejected, (state, action) => {
                state.status = "idle";
            })

            .addCase(login.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.status = "idle";
                if (payload.status === 200) {
                    localStorage.setItem("token", payload.token);
                    state.isToggle = true
                    localStorage.setItem("name", payload.data.name)
                    localStorage.setItem("email", payload.data.email);
                    localStorage.setItem("id", payload.data._id);
                    localStorage.setItem("photo",payload.img)

                    toast.success(payload.message);
                    // state.redirectTo = '/productlist'


                } else {
                    toast.error(payload.message);
                }
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "idle";
            })

            .addCase(fetchBlogData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogData.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.blogData = action.payload.data;
            })
            .addCase(fetchBlogData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(fetchBlogDetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogDetails.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.blogDet = action.payload.data;
            })
            .addCase(fetchBlogDetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            .addCase(Testimonials.pending, (state) => {
                state.status = "loading";
            })
            .addCase(Testimonials.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.review = action.payload.data;
            })
            .addCase(Testimonials.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            .addCase(Team.pending, (state) => {
                state.status = "loading";
            })
            .addCase(Team.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.team = action.payload.data;
            })
            .addCase(Team.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            
            .addCase(services.pending, (state) => {
                state.status = "loading";
            })
            .addCase(services.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.services = action.payload.data;
            })
            .addCase(services.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            .addCase(servicedetails.pending, (state) => {
                state.status = "loading";
            })
            .addCase(servicedetails.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.serDet = action.payload.data;
            })
            .addCase(servicedetails.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            .addCase(banner.pending, (state) => {
                state.status = "loading";
            })
            .addCase(banner.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.banner = action.payload.data;
            })
            .addCase(banner.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

            .addCase(book.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(book.fulfilled, (state, { payload }) => {
                state.status = "idle";
                toast(payload.message)

              
                

            })
            .addCase(book.rejected, (state, action) => {
                state.status = "idle";
            })

            .addCase(detailsf.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(detailsf.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.details=action.payload.result

              
                

            })
            .addCase(detailsf.rejected, (state, action) => {
                state.status = "idle";
            })
    }
})
export const { Token_remove, Check_Token } = AuthSlice.actions;
