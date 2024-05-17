import { Component } from "react";
import User from "./Userabout";
import Loggedinuser from "../utils/Loggedinuser";

 class About extends Component
 {

    constructor(props)
    {
        super(props);
       

    }

  
    render()
    {

        
        return (
            <div>
          
        <h1>this is about us page </h1>
        <Loggedinuser.Consumer>
            {({username})=><h1 className=" font-bold">{ " logged in user name :" + username}</h1>}
        </Loggedinuser.Consumer>

        <User name={"Shubham"} location={"Surat , Gujarat"} email={"shubh"}/>
       
        </div>
     
        )
    }

 }

export default About ;