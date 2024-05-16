import { CON_URL } from "../utils/constants";




// const Rescard =( {resname , food})=>
  // ({resname , food}) ==prop
  const Rescard =(props)=>
  { 
      const {resdata} = props;
      const {cloudinaryImageId ,name ,cuisines, avgRating , costForTwo  } = resdata?.info ;
    
    
      return (
        <div className="res-card w-48  h-[400px] m-3 rounded-lg shadow-xl" style={{backgroundColor : "#f0f0f0"}}>

            <img className=" w-48 h-48 rounded-lg  " src={CON_URL+cloudinaryImageId}></img>
            

            <h4 className=" pt-1 pl-1 font-mono  truncate font-bold">{name}</h4>
            <h5 className=" pt-1 pl-1 truncate font-semibold">{cuisines.join(",")}</h5>
            <h5 className=" pt-1 ">{"⭐"+avgRating} stars</h5>
            <h5 className=" pt-1 pl-1 text-red-400">{costForTwo}</h5>
            <h5 className=" pt-1 pl-1 font-light">{resdata.info.sla.slaString}</h5>
           
        </div>
    )
    //   return (
    //       <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
  
    //           <img className="res-img" src={CON_URL+cloudinaryImageId}></img>
    //            {/* <h4>{resname}</h4>
    //           <h5>{food}</h5>  
    //           // resname ==props.resname , food == props.food
    //           <h5>4.5 stars</h5>
    //           <h5>30 min </h5>  */}
  
    //           <h4>{name}</h4>
    //           <h5>{cuisines.join(",")}</h5>
    //           <h5>{avgRating} stars</h5>
    //           <h5>{costForTwo}</h5>
    //           <h5>{resdata.info.sla.slaString}</h5>
             
    //       </div>
    //   )
  }




  //higher order component
  //input - Rescard =>>Rescardprometed(which rating is above 4.5)

   export const withprometedlabel = (Rescard)=>
    {
      return (props)=>//this return component
        {
          return(//this return jsx of that component
            <div>
              <label className=" absolute w-20 ml-2 bg-slate-900 text-stone-50">Promoted</label>
              <Rescard {...props}/>
            </div>
            //(... )it is spread operator - it passes the all the props that will be recived
          )
        }
    }

  export default Rescard;