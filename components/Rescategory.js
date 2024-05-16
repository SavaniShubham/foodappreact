import { useState } from "react";
import Itemlist from "./Itemlist";



const Rescategory = ({item})=>
    {
      const [showitems , setshowitems]=useState(false);
        
      const handleclick = ()=>
        {
          //whenever click it change the state and by that we can handle accordian body to show or not 
        
          // showitems == false ? setshowitems(true) : setshowitems(false);
          //bothe are same 
          setshowitems(!showitems);
        
        }
        // console.log(item);
        return(
            <div >
                <div className="w-6/12 mx-auto my-4 bg-gray-100  p-4 shadow-lg ">

                  {/* //headar of the accordian */}
                  <div className="flex justify-between cursor-pointer" onClick={handleclick}>
                    <span className="font-bold text-lg">{item.title} ({item.itemCards.length})</span>
                    <span className=" cursor-pointer">▼</span>
                  </div>

                  {/* body of the accordian */}
                  { showitems  && <Itemlist itemCards={item.itemCards}/>} 
                </div>


            </div>
        )
    }

export default Rescategory ;