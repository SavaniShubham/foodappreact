import { useSelector } from "react-redux";




const Cart = ()=>
    {
        const cartitem = useSelector((store)=>store.cart.item);  
        console.log(cartitem);
        return(
            <ul>
                        
            {
              
                 cartitem.map((item)=>
                 (
                    
                       <div className=" flex justify-between h-44 border-solid border-b-2 border-gray-200 mb-3" key={item.card.info.id}>

                       <div className=" ml-12">
                         
                         <img className="  w-36 h-40 pb-1 rounded-xl cursor-pointer" src={CON_URL+item.card.info.imageId}></img>
                        
                      </div>
                       <div className=" w-9/12 mt-3  items-center font-mono ">
                         <div>{item.card.info.itemAttribute.vegClassifier ==="VEG" ? "🟩" : "🟥"}</div>
                         <div className=" font-bold text-gray-950">{item.card.info.name}</div>
                         <div className=" font-semibold tracking-tight">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                         
                       </div>
                       
                       
                      </div>
                  
                 ))
               }
         </ul>
        )
    }

export default Cart ;