

//this is react context (it is solution of props drilling )

import { createContext } from "react";


const Loggedinuser = createContext(
    {
        username : "Default user",
    }
)

export default Loggedinuser ;


//we export it in header , aboutus 
// in header we can use it with the help of usecontext hook 
//in about us we can use i with the help of  Loggedinuser.consumer component