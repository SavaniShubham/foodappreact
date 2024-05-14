import { useEffect, useState } from "react";


const useOnlineStatus = ()=>
    {
        //check if online

        const [OnlineStatus,setStatus]=useState(true);
        useEffect(()=>
        {
            window.addEventListener("online", () => {
               setStatus(true);
            }); //this is event lister given by the window browser
            window.addEventListener("offline", () => {
                setStatus(false);
             });

        },[]);
       

        //onlineStatus is boolean
        return OnlineStatus ;
    }

    export default useOnlineStatus;