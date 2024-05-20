import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";

const appstore =configureStore({
    reducer : {
        cart : cartReducer ,
    }
});


export default appstore ;


//about redux process
//first install it (rtk , react-redux)
//create redux store (redux store that data it store and it can access anywhere by any  , redux store is also divided into small poration it is slice )
//connect the redux store to react app
//create slice to store about that data (here we create cartslice)
     // it is one object in that give first name of thata , initial state and then reducers in that give action thata you want to perform (in that it has state and action as perameters ) 
//add this slice into store 

//read the data using selector (we did it in header using useSelector hook )

//add + => dispatch action => call reducer => store data in cart slice 
//for reading thata data in header header is subscribing the store using selector 

