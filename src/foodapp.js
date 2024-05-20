import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


import { useState,useEffect } from "react";
import Loggedinuser from "../utils/Loggedinuser"
import Header from "../components/Header";
import Body from "../components/Body";
import {Body} from "../components/Body";
import { RouterProvider, createBrowserRouter  , Outlet} from "react-router-dom";
// import About from "../components/AboutUs";
import Contect from "../components/ContectUs";
import Error from "../components/ErrorPage";
import RescardMenu from "../components/Rescardmenu";
// import Grocery from "../components/Grocery";
import { lazy , Suspense } from "react";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";
import Cart from "../components/Cart";



const Grocery = lazy(()=> import("../components/Grocery"));//this is way to import in lazy loading 
const About = lazy(()=> import("../components/AboutUs"));
//by that after i click on that then the new js file for that file is created before that only on js file is there and i didn't contain the data of this page component





const Applayout  = ()=>
{
    const [usernamebyapi,setusernamebyapi]=useState();

    useEffect(()=>
    {
    //suppose we do api call and the name of the user is shubham savani
    //for change the the name in the whole app we wrap the all inside Loggedinuser.provider in that we give the value , this value is override not change the acctual value of it (Default user) . in that header we give the value of it taxil and other component we give the value of it  shubham , if outside the whole component if we use the username value is Default user
    //the value is depend on where you use the Loggedinuser.provider if you don't use then the value is default value 

    //thern we create on input box in body.js in whar ever you add it the name of username , therfore updating the value we pass setusernamebyapi into Loggedinuser.provider thetefore we can access it by any where now it is part of context 
    //we bind the local state variable with the context it means if the state value is updated the value of context is updated and when we use this value is also upadated 

    const data = {
       name : "shubham savani ",
    }
    setusernamebyapi(data.name);

},[]); 

return (
    //wrapp whole app in provider
        <Provider store={appstore}>
        <Loggedinuser.Provider value={{username : usernamebyapi , setusernamebyapi}}>
        <div className ="box-border m-0 p-0">    
          <Header/>
           <Outlet/>
        </div>
        </Loggedinuser.Provider>
        </Provider>
    )
    // return (
    // //here value of username = Default user
    //     <Loggedinuser.Provider value={{username : usernamebyapi , setusernamebyapi}}>
    //        {/* here value of username = shubham */}
    //     <div className ="box-border m-0 p-0">    

    //         {/* 
    //           <Loggedinuser.Provider value={{username : "taxil"}}>
    //               {/* here value of username = taxil  */}
    //              {/* <Header/>
    //           </Loggedinuser.Provider> */}
    //       <Header/>
         
    //        <Outlet/>
    //        {/* outlet is use to reder the children route component */}
       
    //     </div>
    //     </Loggedinuser.Provider>
    // )
}



const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        //here Appayout is perent with the Header and outlet component and it have children route if path is the url is match with that then the outlet is repelace with that component   
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:(<Suspense fallback = {<h1>loading..........</h1>}>
                    <About/>
                    </Suspense>
                ),
            },
            {
                path:"/contect",
                element:<Contect/>
            },
            {
                path:"/restaurant/:resId",
                element:<RescardMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback = {<h1>loading ...... ...... .....</h1>}><Grocery/></Suspense>,
                //fallback is shown when the browser in suspended the  Grocery componenet it don't have data of it 
            },
            {
                path:"/cart",
                element:<Cart/>
            },
          
        ],
        errorElement:<Error/>
    },
   
]);
//this will  help to create other pages in the application (create configration )
// const appRouter =createBrowserRouter([
//     {
//         path:"/",
//         element:<Applayout/>,
//         errorElement:<Error/>
//     },
//     //if path is this  then load this element (component ) if path is incorrect or ant error load errorElement (Error component)
//     {
//         path:"/about",
//         element: <Header/> ,
//         element:<About/>,
       
//     }, 
//     {
//         path:"/contect",
//         element:<Contect/>
//     },
// ]);

const root =ReactDOM.createRoot(document.querySelector('.root'));

// root.render(<Applayout/>);

root.render(<RouterProvider router={appRouter}/>)//for load that configration into the application  RouterPRovider is use