import { useState } from "react";
import Itemlist from "./Itemlist";



const Rescategory = ({item , showitems  , setindex })=>
    {
      
      // const [showitems , setshowitems]=useState(false);
        
      // const handleclick = ()=>
      //   {
        //here this is uncontrol component (beacuase each have that own state variable(showitems) and it can control it )
      //     //whenever click it change the state and by that we can handle accordian body to show or not  
        
      //     // showitems == false ? setshowitems(true) : setshowitems(false);
      //     //bothe are same 
      //     setshowitems(!showitems);
        
      //   }

       const handleclick = ()=>
        {

          // here we have not local state variable (showitems) for each one category(it means own local state variable)
          //parent passes the state variable in the function and by that function we change the value of it in the child component
         
          //here we set the index to show the data of that category
           setindex();

           //if our data it already expanded and we click it it means that time index == expanded index and the data is not showen and vice - versa of it 
         
          

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