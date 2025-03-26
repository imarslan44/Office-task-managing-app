import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Context";


const store = configureStore({
    reducer: reducer
})

export default store