import { useDispatch, useSelector } from "react-redux";
import { CON_URL } from "../utils/constants";
import { clearitem, removeitem } from "../utils/cartslice";

const Cart = ()=>
    {
        const cartitem = useSelector((store)=> store.cart.items);
        console.log(cartitem);
        const dispatch =useDispatch();
        // const handleremoveclick = (item)=>
        //   {
        //       dispatch(removeitem(item.card.info.id));
        //   }

          const clearcart = ()=>
            {
              dispatch(clearitem());
            }
      
        return(
            <div className=" w-3/4 m-auto flex justify-between">
                     <div>
                        
                      
                         <div className=" absolute mx-[700px] mt-5 w-14 h-10 text-2xl bg-white text-gray-400 text-center  shadow-lg">
                         <button onClick={()=> clearcart()} >x</button>
                         </div>
                         {
                          cartitem.map((item)=>
                          (                       
                           <div className="  m-auto flex h-32 border-solid border-b-2 border-gray-200 pt-10" key={item.card.info.id}>

                                 
                                   <div>
                                    <img className=" w-20 h-24 pb-1 rounded-xl cursor-pointer" src={CON_URL+item.card.info.imageId}></img>
                                   </div>
                                  
                                  <div className="   items-center font-mono  ">
                                    <div className=" ml-4">
                                      <span>{item.card.info.itemAttribute.vegClassifier ==="VEG" ? "🟩" : "🟥"}</span>
                                       <div className=" flex ">
                                         <div className=" w-96 font-bold text-gray-950">{item.card.info.name}</div>
                                        <div className=" ml-24 font-semibold tracking-tight">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                                      </div>
                                       
                                            <div className= " mt-3 w-36 shadow-xl rounded-lg">
                                          <button className=" w-7 border ">-</button><button className=" w-20">Add</button><button className="w-7 border">+</button>
                                         </div>
                        
                                     </div>
                                  </div>
                           </div>
                         
                           
                          ))
                        }
                      </div>

                      <div className=" bg-slate-300 mt-8">
                       
                             <div>Bil Details</div>
                             <div>item total</div>
                             <div>platform fee</div>
                             <div>GST and Restaurant charges</div>
                             <div>To pay</div>
                       
                      </div>
            </div>
        )
    }

    export default Cart;