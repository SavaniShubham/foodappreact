import { useDispatch } from "react-redux";
import { additem } from "../utils/cartslice";
import { CON_URL } from "../utils/constants";


const Itemlist = ({itemCards})=>
    {
      const dispatch = useDispatch();
      const handlecart =(item)=>
        {
           dispatch(additem(item));
         }
        //here we dispatch the action (in the backend additem(item) == { payload : item } therfore we do action.payload)

        return(
            <div >
               <ul>
                        
                     {
                          itemCards.map((item)=>
                          (
                             
                                <div data-testid="menuitems" className=" flex justify-between h-44 border-solid border-b-2 border-gray-200 mb-3" key={item.card.info.id}>
                                <div className=" w-9/12 mt-3  items-center font-mono ">
                                  <div>{item.card.info.itemAttribute.vegClassifier ==="VEG" ? "🟩" : "🟥"}</div>
                                  <div className=" font-bold text-gray-950">{item.card.info.name}</div>
                                  <div className=" font-semibold tracking-tight">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                                  <div className=" font-sans break-words mt-3 font-extralight text-gray-900 truncate">{item.card.info.description}</div>
          
                                </div>
                                <div className=" ml-12">
                                   <div className=" absolute mx-8 mt-[132px] w-20 h-8 bg-white text-green-600 text-center rounded-lg  shadow-lg">
                                   <button onClick={()=> handlecart(item)} >Add+</button>
                                   </div>
                                   <img className="  w-36 h-40 pb-1 rounded-xl cursor-pointer" src={CON_URL+item.card.info.imageId}></img>
                                  
                                </div>
                                
                               </div>
                           
                          ))
                        }
                  </ul>
            </div>
        )
    }
export default Itemlist ;