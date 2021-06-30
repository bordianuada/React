import {createSlice} from "@reduxjs/toolkit";

export const programSlice = createSlice({
    name: "program",
    initialState:{
        pacienti:[],
    },
    reducers:{
        addPacient: (state, action)=> {
            state.pacient=[...state.pacienti, action.payload]
        },
        updatePacient: (state, action)=>{
            state.pacient = action.payload;
        }
    }
});

export const {addPacient, updatePacient} = programSlice.actions;

export const pacienti = (state) => state.pacienti;

export default programSlice.reducer;