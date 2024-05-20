import { createSlice } from "@reduxjs/toolkit";


const cartslice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[],
        },
        reducers:{
            additem: (state , action)=>
                {
                    state.items.push(action.payload);
                },
            removeitem: (state , action)=>
                    {
                       state.items.pop();
                    },
            clearitem :(state)=>
                {
                    state.items.length = 0;
                },
        },
    }
);


export  const {additem , removeitem , clearitem } = cartslice.actions ;
export default cartslice.reducer;


// ( , )=>
//     {
        
//     },this is reducer 