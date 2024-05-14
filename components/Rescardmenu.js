// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";
import {  CON_URL } from "../utils/constants";
import useResmenuhook from "../utils/useResmenuhook";



const RescardMenu =()=>
    {
        // const [resmenulist,setmenulist]=useState(null);
        const {resId} = useParams();
     
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
            console.log(itemCards);

                 
        return(      
            <div >

                <div className="res_details">
                    <div className="res_name">
                         <h1>{name}</h1>
                         <h2 >{cuisines.join(" , ")}</h2>
                         <h3>{costForTwoMessage}</h3>
                    </div>
                </div>  

               <div className="menu">
                <span className="menu_name"> -: M E N U :- </span>
               </div>
                

                <ul>
                    
                      {
                        itemCards.map((item)=>
                        (
                            // <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</li>
                            <div className="item_body" key={item.card.info.id}>
                            <div className="item_container">
                           

                    
                             <div className="item_data">
                                <div className="vegi">{item.card.info.itemAttribute.vegClassifier}</div>
                                <div className="item_name">{item.card.info.name}</div>
                                <div className="item_price">Rs {item.card.info.defaultPrice/100 || item.card.info.finalPrice/100  || item.card.info.price/100 }</div>
                                <div className="item_des">{item.card.info.description}</div>
        
                            </div>
                              <div className="item_image">
                                 <img className="food_image" src={CON_URL+item.card.info.imageId}></img>
                              </div>
                              
                             </div>
                        </div>
                        ))
                      }
                </ul>
            </div>);      
    };
export default RescardMenu;