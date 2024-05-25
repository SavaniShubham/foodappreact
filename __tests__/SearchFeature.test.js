import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body";
import Mock_data from "../mocks/mockreslistdatafromapi.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch=jest.fn(()=>
{
    return Promise.resolve({
      json:()=>
        {
            return Promise.resolve(Mock_data);
        }  
    })
})

// beforeAll(()=>{
//     console.log("this will show at first before the any test case is not run ");
// })
// beforeEach(()=>{
//     console.log("this will show before the every test cases ");
// })

// afterAll(()=>{
//     console.log("this will show at last after the all test case run ");
// })
// afterEach(()=>{
//     console.log("this will show after the every test cases ");
// })


it("should load the search event for burger input ", async ()=>
{

   await act(async () => render(
   <BrowserRouter>
   <Body/>
   </BrowserRouter>) );


const cardsbeforesearch =screen.getAllByTestId("rescard");

   expect(cardsbeforesearch.length).toBe(20);

   const searchbutton = screen.getByRole("button",{name:"Search"});

//    const searchinput = screen.getByPlaceholderText("res name");
      const searchinput = screen.getByTestId("searchinput");
//    console.log(searchinput);

   fireEvent.change(searchinput,{ target : {value :"burger"}});

   fireEvent.click(searchbutton);
    
   const cardsaftersearch =screen.getAllByTestId("rescard");
   expect(cardsaftersearch.length).toBe(3);
})


//first issue -- fetch is given by brower but test cases run in js-dom (in that we can't do network call) so we crated mock funtion like fetch the data 
//second issue -- state upated is in wrpped in act()
//third issue -- <link> we solved it by BrowerRouter

//we also get that element by test id therefore pass data-testid in the attribute of that tage and we can use it here
//first we check the length of cards before search then select that search btn ,searchinputbox then fire event and then check the cards length afterthesearch

//in change event second argrument is pass for e.target.value (beacuse it is also given by browser so we created it for js-dom for without network)



it("should load the top rated res ", async ()=>
    {
    
       await act(async () => render(
       <BrowserRouter>
       <Body/>
       </BrowserRouter>) );
    
    
    const cardsbeforefilter=screen.getAllByTestId("rescard");
    
       expect(cardsbeforefilter.length).toBe(20);
    
       const topresbtn = screen.getByRole("button",{name:"Top Rated Restaurants"});    
    
       fireEvent.click(topresbtn);
        
       const cardsafterfilter =screen.getAllByTestId("rescard");
       expect(cardsafterfilter.length).toBe(11);
    })
    