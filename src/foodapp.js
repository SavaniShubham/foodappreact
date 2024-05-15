import React from "react";
import ReactDOM from "react-dom/client";
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

const Grocery = lazy(()=> import("../components/Grocery"));//this is way to import in lazy loading 
const About = lazy(()=> import("../components/AboutUs"));
//by that after i click on that then the new js file for that file is created before that only on js file is there and i didn't contain the data of this page component


const Applayout  = ()=>
{
    
    return (
        <div className ="app box-border m-0 p-0">
        

        <Header/>
        <Outlet/>
       {/* outlet is use to reder the children route component */}
       
        </div>
    )
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