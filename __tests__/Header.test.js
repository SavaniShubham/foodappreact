import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appstore from "../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load the login button in the header component",()=>{
   render(
    <BrowserRouter>
   <Provider store={appstore}>
   <Header/>
   </Provider>
   </BrowserRouter>
   );

//    const loginbutton = screen.getByRole("button");
//    const loginbutton = screen.getByText("Login");
      const loginbutton = screen.getByRole("button" , {name:"Login"});

   expect(loginbutton).toBeInTheDocument();
});

it("should load the cart item  in the header component",()=>{
    render(
     <BrowserRouter>
    <Provider store={appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
 

       const cart = screen.getByText(/🛒/);
 
    expect(cart).toBeInTheDocument();
 });

 it("should load the login button to logout button  in the header component",()=>{
    render(
     <BrowserRouter>
    <Provider store={appstore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );
 
       const loginbutton = screen.getByRole("button" , {name:"Login"});

       fireEvent.click(loginbutton);

       const logoutbutton = screen.getByRole("button" , {name:"Logout"});

 
    expect(logoutbutton).toBeInTheDocument();
 });


 //first check the login buuton is there or not (in that main is we can pass the name as second argrument in that)
 //second is for the cart(in that we pass in /../ becuase in that after the logo it will any number 0 , 1,2 ...)
 //third check the event (withe help of fireEvent )