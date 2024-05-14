import { Component } from "react";
import User from "./Userabout";


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

        <User name={"Shubham"} location={"Surat , Gujarat"} email={"shubh"}/>
       
        </div>
     
        )
    }

 }

export default About ;