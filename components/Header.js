import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = ()=>


{
    const [btnName,setbtn] = useState('Login');
    //always use usestate inside the component and try to put at top in the component also don't use it inside conditional block , loop etc

    useEffect(()=>
    {
        console.log("use Effect is called");
    },
        // );//this will called after all the time when component rereder
    // []);//this will called at only initial time when component render
    [btnName]);//this will called after all the time when the value of btnName is changed and component rerender
    const status = useOnlineStatus();//use this show that internet is on or off

    return (

        <div className="header ">
            <div className=" logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav">
                <ul className=" bg-pink-500">
                   
                   <li>Online Status :{status === true ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><a href="/about">About Us</a></li> */}
                     <li><Link to="/about">About Us</Link></li> 
                     {/* in react anchor tage is not use link the page withe component beacuse this is reaload the whole page */}
                    {/* but the Link is only change that component of that route not reaload the whole page and this fast therefor react app is single page application inthat only the component is interchange not the whole page is reaload */}
                    <li><Link to="/contect">Contect US</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="log-btn"  onClick={
                        ()=>
                        {
                            btnName == 'Login'? setbtn("Logout") : setbtn('Login');
                        }
                    }>{btnName}</button>
                </ul>
            </div>

        </div>

    )
}

export default Header;