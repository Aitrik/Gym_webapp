import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./AuthSlice";



export const store=configureStore(
    {
        reducer:{
            Auth:AuthSlice.reducer,
           
            
        }
    }
)