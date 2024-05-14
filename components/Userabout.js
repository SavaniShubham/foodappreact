import React from "react";

//as like functional component we can also create classbassed component  like as bellow
class User extends React.Component
{
   
    constructor(props)
    {
        super(props);

        // console.log(props);
        this.state=
        {
            userinfo :{
                name:"dummy",
                location:"n/a",
            }
        }
        console.log( this.props.name  + " user (child)  constructor is called");
    }
    
    async componentDidMount()
    {
       const data =  await fetch("https://api.github.com/users/SavaniShubham");
       const json = await data.json();


       this.setState({
        userinfo:json,
       })
       console.log( this.props.name  + " user (child)  componentDidMount  is called");
       console.log(json);

    //   this.id =setInterval(()=>
    // {
    //     console.log("the set interval called");//this will be prittened contnious although you goto different page (because react create a single page app in that the component is changed ) for stoping we clear it at componentwillunmount()
    // } , 1000);
    }
    componentDidUpdate()
    {
        console.log("the componentdid update is called");
    }
    componentWillUnmount()
    {
            // clearInterval(this.id);
        console.log("the componentWillUnmount is called");
    }

    
   
   
    render()
    {
       

        const {name  , location  } = this.state.userinfo;

        console.log(this.props.name  + " user (child) render is called");
      

      
        return(
            <div className="user_comp">
                <h2>Name : {name}</h2>
                <h3>Loaction : {location}</h3>
                <h3>Email : @gmail.com </h3>
               

            </div>
        )

    }


}


 
export default User ;