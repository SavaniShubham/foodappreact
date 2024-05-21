import { useDispatch, useSelector } from "react-redux";
import { CON_URL } from "../utils/constants";
import { additem, clearitem, removeitem } from "../utils/cartslice";
import Shimmer from "./Shimmer";

const Cart = ()=>
    {
        const cartitem = useSelector((store)=> store.cart.items);
        console.log(cartitem);
        const totalprice = useSelector((store) => store.cart.totalprice);
        console.log(totalprice);
        let Gst = ((totalprice*11)/100).toPrecision(2);
        const dispatch =useDispatch();
        const handleremoveclick = (item)=>
          {
              dispatch(removeitem(item));
          }
          const clearcart = ()=>
            {
              dispatch(clearitem());
            }
      
        return( totalprice == 0 ? <Shimmer/> :
            <div className=" w-3/4 m-auto flex justify-between">
                     <div >
                         <div className=" absolute mx-[800px] mt-5 w-14 h-10 text-2xl bg-white text-gray-400 text-center  shadow-lg">
                         <button onClick={()=> clearcart()} >x</button>
                         </div>
                         {
                          cartitem.map((item)=>
                          (                       
                           <div className="  m-auto flex h-32 border-solid border-b-2 border-gray-200 pt-10" key={item.card.info.id}>

                                 
                                   <div>
                                    <img className=" w-20 h-20pb-1 rounded-xl cursor-pointer" src={CON_URL+item.card.info.imageId}></img>
                                   </div>
                                  
                                  <div className="   items-center font-mono  ">
                                    <div className=" ml-4">
                                      <span>{item.card.info.itemAttribute.vegClassifier ==="VEG" ? "🟩" : "🟥"}</span>
                                       <div className=" flex ">
                                         <div className=" w-96 font-bold text-gray-950">{item.card.info.name}</div>
                                        <div className=" ml-56 font-semibold tracking-tight">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                                      </div>
                                       
                                            <div className= " mt-3 w-36 shadow-xl rounded-lg">
                                          <button className=" w-7 border " onClick={()=>handleremoveclick(item)}>-</button>
                                          <button className=" w-20">Add</button>
                                          <button className="w-7 border" onClick={()=>handleaddclick(item)}>+</button>
                                         </div>
                        
                                     </div>
                                  </div>
                           </div>
                         
                           
                          ))
                        }
                      </div>

                      <div className="  bg-gray-200 mt-32 w-80 h-44 rounded-lg shadow-lg">
                       
                             <div className=" ml-3 mt-4 font-semibold text-lg">Bil Details</div>
                             <div className="flex justify-between">
                               <div className=" ml-3 leading-7">
                                <div>item total</div>
                                <div>platform fee</div>
                                <div>GST </div>
                                <hr></hr><hr></hr>
                                <div className=" font-bold">To pay</div>
                             </div>
                             <div className="mr-4 leading-7">
                             <div > ₹{totalprice} </div>
                             <div > ₹ 5 </div>
                             <div > ₹{Gst} </div>
                             <hr></hr><hr></hr><hr></hr><hr></hr>
                             <div  className=" font-bold"> ₹{totalprice + 5 + Gst} </div>
                             </div>
                             </div>
                       
                      </div>
            </div>
        )
    }

    export default Cart;