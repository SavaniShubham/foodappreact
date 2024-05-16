import { useEffect, useState } from "react";


import { MENU_URL } from "./constants";


const useResmenuhook = (resId)=>
    {
        const [resmenulist,setmenulist]=useState(null);
        useEffect(()=>
            {
                fetchmenu();
    
               
            },[]);
    
            const fetchmenu = async()=>
                {
                    const menuapi =  await fetch(MENU_URL+resId); //636894 //47589 // 589064 this id is for example put in the browser url
                    const json = await menuapi.json();
    
                    // console.log(json);
    
                    setmenulist(json.data);
                    
                };

               
                return resmenulist ;

    }
    export default useResmenuhook ;