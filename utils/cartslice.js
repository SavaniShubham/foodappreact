import { createSlice, current } from "@reduxjs/toolkit";


const cartslice = createSlice(
    {
        name:"cart",
        initialState:{
            items:[],
            totalprice:0,
        },
     
        reducers:{
            additem: (state , action)=>
                {
                    state.items.push(action.payload);
                    state.totalprice = state.totalprice + (action.payload.card.info.defaultprice/100 ||action.payload.card.info.finalprice/100 ||action.payload.card.info.price/100) ;

                   
                },
            removeitem: (state , action)=>
                    {
                      id=action.payload.card.info.id ;
                      state.items= state.items.filter(item => item.card.info.id !=id );
                      state.totalprice = state.totalprice - (action.payload.card.info.defaultprice/100 ||action.payload.card.info.finalprice/100 ||action.payload.card.info.price/100) ;
                    },
            clearitem :(state)=>
                {
                    state.items.length = 0;
                    state.totalprice = 0;
                },
        },
    }
);


export  const {additem , removeitem , clearitem } = cartslice.actions ;
export default cartslice.reducer;


// ( , )=>
//     {
        
//     },this is reducer 