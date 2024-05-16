import { CON_URL } from "../utils/constants";

const Itemlist = ({itemCards})=>
    {
        return(
            <div >
               <ul>
                        
                     {
                          itemCards.map((item)=>
                          (
                             
                                <div className=" flex justify-between h-44 border-solid border-b-2 border-gray-100 mb-3">
                                <div className=" w-9/12 mt-3  items-center font-mono ">
                                  <div>{item.card.info.itemAttribute.vegClassifier}</div>
                                  <div className=" font-bold text-gray-950">{item.card.info.name}</div>
                                  <div className=" font-semibold tracking-tight">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                                  <div className=" font-sans break-words mt-3 font-extralight text-gray-900">{item.card.info.description}</div>
          
                                </div>
                                <div className="item_image ml-12">
                                   <img className="food_image  w-36 h-40 mt-3 rounded-xl" src={CON_URL+item.card.info.imageId}></img>
                                </div>
                                
                               </div>
                           
                          ))
                        }
                  </ul>
            </div>
        )
    }
export default Itemlist ;