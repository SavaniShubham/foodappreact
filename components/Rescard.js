import { CON_URL } from "../utils/constants";




// const Rescard =( {resname , food})=>
  // ({resname , food}) ==prop
  const Rescard =(props)=>
  { 
      const {resdata} = props;
      const {cloudinaryImageId ,name ,cuisines, avgRating , costForTwo  } = resdata?.info ;
    
      
      return (
          <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
  
              <img className="res-img" src={CON_URL+cloudinaryImageId}></img>
               {/* <h4>{resname}</h4>
              <h5>{food}</h5>  
              // resname ==props.resname , food == props.food
              <h5>4.5 stars</h5>
              <h5>30 min </h5>  */}
  
              <h4>{name}</h4>
              <h5>{cuisines.join(",")}</h5>
              <h5>{avgRating} stars</h5>
              <h5>{costForTwo}</h5>
              <h5>{resdata.info.sla.slaString}</h5>
             
          </div>
      )
  }


  export default Rescard;