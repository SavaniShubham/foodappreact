// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import {  CON_URL } from "../utils/constants";
import useResmenuhook from "../utils/useResmenuhook";
import Rescategory from "./Rescategory";
import { useState } from "react";



const RescardMenu =()=>
    {
        // const [resmenulist,setmenulist]=useState(null);
        const {resId} = useParams();

        const [expandindex , setexpandindex]=useState(null);
     
        const resmenulist = useResmenuhook(resId);//(now the whole logic of fetching the data and create and maintain the set variable in the useResmenuhook custom hook)
        // useEffect(()=>
        // {
        //     fetchmenu();
        // },[]);

        // const fetchmenu = async()=>
        //     {
        //         const menuapi =  await fetch(MENU_URL+resId); //636894 //47589 // 589064 this id is for example put in the browser url
        //         const json = await menuapi.json();

        //         console.log(json);

        //         setmenulist(json.data);
                
        //     };
            if (resmenulist === null )   //if this condition is not put then the bellow distructred is give error because the value of resmenulist is null for first time
                {
                    return <Shimmer/>;
                }
               
            const {name , cuisines , costForTwoMessage } = resmenulist?.cards[2]?.card?.card?.info;
          
            const { itemCards } = resmenulist?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
            // console.log(itemCards);

            //we crated  categories for the perticulat catagory data
            // console.log(resmenulist?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

            const categories = resmenulist?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                                        (c) =>
                                                c.card?.["card"]?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                                            );
            // console.log(categories);
            


            return(      
                <div>
    
                    <div className="flex justify-center">
                        <div className=" h-28 w-6/12 mt-7">
                             <h1 className=" font-bold text-2xl">{name}</h1>
                             <h2 className= " font-semibold text-gray-900">{cuisines.join(" , ")}</h2>
                             <h3 className=" text-red-300">{costForTwoMessage}</h3>
                        </div>
                    </div>  
    
                   <div className="flex justify-center items-center  pt-7 pb-14">
                    <span className=" text-3xl underline"> -: M E N U :- </span>
                   </div>
                    
                    <ul>   
                        {
                            //create the accordian with the title of catagory and that data
                            // categories.map((c)=> <Rescategory key={c?.card?.card?.title} item={c?.card?.card} />)


                            //controled component
                            //this concept is knwon as lifting state up (we lift the local state variable of each all categories to the parent Rescardmenu )
                            //here we pass showitems and setindex to control the state variable for all the children(catagories) by the parent component (Rescardmenu)
                             categories.map((c , index)=> <Rescategory 
                             key={c?.card?.card?.title} 
                             item={c?.card?.card} 
                             showitems={ index == expandindex ? true : false }
                             setindex ={()=> expandindex == index ? setexpandindex(null) : setexpandindex(index)} 
                             
                             />)
                            //  we can't access the parent state variable by the child for access and control that  we pass it the like of function (setindex)
                        }
                    </ul>
{/*     
                    <ul>
                        
                          {
                            itemCards.map((item)=>
                            (
                                // <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</li>
                             <div className=" flex justify-center" key={item.card.info.id}>
                                <div className=" flex justify-between w-6/12 h-44border-solid border-b-2 border-gray-100 mb-3">
                                  <div className=" w-9/12 mt-3  items-center font-mono ">
                                    <div>{item.card.info.itemAttribute.vegClassifier}</div>
                                    <div className=" font-bold text-gray-950">{item.card.info.name}</div>
                                    <div className=" font-semibold tracking-tight">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                                    <div className=" font-sans break-words mt-3 font-extralight text-gray-900">{item.card.info.description}</div>
            
                                  </div>
                                  <div className="item_image ml-12">
                                     <img className="food_image  w-36 mt-3 rounded-xl" src={CON_URL+item.card.info.imageId}></img>
                                  </div>
                                  
                                 </div>
                              </div>
                            ))
                          }
                    </ul> */}
                </div>);      
        };
                 
    //     return(      
    //         <div >

    //             <div className="res_details">
    //                 <div className="res_name">
    //                      <h1>{name}</h1>
    //                      <h2 >{cuisines.join(" , ")}</h2>
    //                      <h3>{costForTwoMessage}</h3>
    //                 </div>
    //             </div>  

    //            <div className="menu">
    //             <span className="menu_name"> -: M E N U :- </span>
    //            </div>
                

    //             <ul>
                    
    //                   {
    //                     itemCards.map((item)=>
    //                     (
    //                         // <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</li>
    //                         <div className="item_body" key={item.card.info.id}>
    //                         <div className="item_container">
                           

                    
    //                          <div className="item_data">
    //                             <div className="vegi">{item.card.info.itemAttribute.vegClassifier}</div>
    //                             <div className="item_name">{item.card.info.name}</div>
    //                             <div className="item_price">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
    //                             <div className="item_des">{item.card.info.description}</div>
        
    //                         </div>
    //                           <div className="item_image">
    //                              <img className="food_image" src={CON_URL+item.card.info.imageId}></img>
    //                           </div>
                              
    //                          </div>
    //                     </div>
    //                     ))
    //                   }
    //             </ul>
    //         </div>);      
    // };
export default RescardMenu;