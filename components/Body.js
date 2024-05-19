import Rescard , {withprometedlabel} from "./Rescard";
// import datalist from "../utils/mokedata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


import Loggedinuser from "../utils/Loggedinuser";
import { useContext } from "react";

 export const Body =()=>

{
    // const [reslist,setreslist]= useState(datalist);
    //local state variable (above is array destrcture it will same as const arr= useState(datalist); const [reslist,setreslist]= arr; )

    const [reslist,setreslist]= useState([]);

    console.log(reslist);

    const Rescardprometed = withprometedlabel(Rescard);
   
    //now the help of the that no dummy data will be showen before the useEffect callback 
     useEffect(
    ()=>{
        console.log("this will called after the component render");
        fetchdata();
       
     }, []) ;
     //useEffect callback function will work after the ui component will be render 
     //in here we fetch the swiggy api and upadate the reslist with the api data in the fetchdata -> setreslist function
     //by that first it will show the dummy data of reslist but after the useEffect callback function called it will update the reslist and change ui according to that data 
    const fetchdata = async ()=>
    {
        const api = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        //  const api= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.18880&lng=72.82930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");this is second api for example

        const json = await api.json() ;

        // console.log(json);
        // setreslist(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);//this no good way so written it with optional chaning 
        setreslist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterreslist(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    const [searchname,setsearch] =useState("");
    const [filterreslist,setfilterreslist]= useState([]);
    //this filterreslist will help to will doing the search , filter the top resatuarant because of thata we have two copy the the data 
    //by the our main reslist data wil be not change directly while we want to change the data we change it in filterreslist
   

    const status = useOnlineStatus();
    if(!status)
        {
            return(
                <h2>your are offline ! check the internet connection .</h2>
            )    
        }

 
    const {  username , setusernamebyapi} = useContext(Loggedinuser);

    // if (reslist.length === 0) 
    // {
    //     // return <h1>Loading...</h1>
    //    return <Shimmer/>
        
    // }
    // this is written in ternary operstion in bellow

    return(  reslist.length === 0 ? <Shimmer/>:

    <div className="body">
        <div className="flex p-3 ">
            <div >
                <input  type="text"placeholder="  res name "
                 value={searchname} onChange={(e)=>{ setsearch(e.target.value);}} ></input>
                <button className=" ml-3 bg-green-200 text-center w-20" onClick={()=>{
                    console.log(searchname);
                    const filterlist = reslist.filter(res=> res.info.name.toLowerCase().includes(searchname.toLowerCase()));
                    console.log(filterlist);
                   
                    setfilterreslist(filterlist);
                       
                    
                }}>Search</button>
            </div>

            <button className=" ml-3 w-48 bg-slate-200"
               onClick=
               {
                 ()=>{
                 
                  const filterlist = reslist.filter(res=> res.info.avgRating>4.3);
                 
                  setfilterreslist(filterlist);
                  }

               }>Top Rated Restaurants 
            </button>
                <div className=" ml-3 border border-solid border-black">
                <label>username :</label>
                <input className=" pl -2" type=" text " value={username} onChange={ (e)=>{setusernamebyapi(e.target.value) } }></input>
                </div>
                  
        </div>
        <div className="res-container flex flex-wrap pl-20" >

            {

                 filterreslist.map((res) =>(
                     <Link 
                     key={res.info.id} 
                    //  if taring>4.5 then it load the promtedlabel oherwise only that card
                     to={"/restaurant/" + res.info.id}>
                        {
                            res.info.avgRating>4.5 ?(<Rescardprometed resdata={res}/>) :(<Rescard resdata={res}/>)
                        }
                        {/* <Rescard  resdata={res}/> */}
                        </Link>
                        )  )
                
            }                      
        </div>
    </div>
)
}






    //     return(  reslist.length === 0 ? <Shimmer/>:

//         <div className="body">
//             <div className="filter">
//                 <div className="searchbar" >
//                     <input  type="text" className="search" placeholder="res name "
//                      value={searchname} onChange={(e)=>{ setsearch(e.target.value);}} ></input>
//                     <button  onClick={()=>{
//                         console.log(searchname);
//                         const filterlist = reslist.filter(res=> res.info.name.toLowerCase().includes(searchname.toLowerCase()));
//                         console.log(filterlist);
//                         // setreslist(filterlist);
//                         setfilterreslist(filterlist);
                           
                        
//                     }}>Search</button>
//                 </div>

//                 <button className="filter-btn"
//                    onClick=
//                    {
//                      ()=>{
//                       //here for the filter logic in js is very complicated and it is use for the update the list we use here local state variable this is create using the react hook useState()and for update this list we use a function this pass as second paramter 
//                       const filterlist = reslist.filter(res=> res.info.avgRating>4.3);
//                       // setreslist(filterlist);
//                       setfilterreslist(filterlist);
//                       }
  
//                    }>Top Rated Restaurants 
//                 </button>
//             </div>
//             <div className="res-container" >

//                 {

//                      filterreslist.map(res => <Link key={res.info.id} to={"/restaurant/" + res.info.id}><Rescard  resdata={res}/></Link>)  
//                     //  reslist.map(res => <Rescard key={res.info.id} resdata={res}/>)  
//                     // datalist.map(res => <Rescard key={res.info.id} resdata={res}/>) 
//                     //in above now data in reslist therefore   
//                 }            
//                 {/* <Rescard resname ="shubham's res" food="punjabi , gujarati"/>
//                 <Rescard resname ="kfc" food="burger , chicken"/> */}
//             </div>
//         </div>
//     )
// }

export default Body;