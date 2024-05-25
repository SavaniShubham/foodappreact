import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import RescardMenu from "../components/Rescardmenu";
import Mock_resmenudata from "../mocks/mockresmenudata.json"
import { Provider } from "react-redux";
import appstore from "../utils/appstore";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";


global.fetch=jest.fn(()=>
    {
        return Promise.resolve({
          json:()=>
            {
                return Promise.resolve(Mock_resmenudata);
            }  
        })
    })
    


        it("should load the Resmenu  component ", async ()=>
        {
            await act(async ()=>{
                render(
                <Provider store={appstore}>
                <RescardMenu/>
                </Provider>
               )
        
            })
        
            const accodionaheader = screen.getByText("Match Day Mania Combos (3)");
        
            fireEvent.click(accodionaheader);
            const menuitems = screen.getAllByTestId("menuitems");
            // console.log(menuitems.length);
            expect(menuitems.length).toBe(3);    

        })

        it("should load the cart items number in the header component ", async ()=>
            {
                await act(async ()=>{
                    render(<BrowserRouter>
                    <Provider store={appstore}>
                        <Header/>
                    <RescardMenu/>
                    </Provider>
                    </BrowserRouter>)
                })
                const accodionaheader = screen.getByText("Match Day Mania Combos (3)");
                 fireEvent.click(accodionaheader);
                const addbtns = screen.getAllByRole("button",{name : "Add+"});
                // console.log(addbtns.length);
                expect(screen.getByText("🛒 0")).toBeInTheDocument();
            
                fireEvent.click(addbtns[0]);
            
                expect(screen.getByText("🛒 1")).toBeInTheDocument();
            
        })

        it("should load the cart item 1 after click on the button  in the cart component ", async ()=>
                {
                    await act(async ()=>{
                        render(<BrowserRouter>
                        <Provider store={appstore}>
                            <Header/>
                        <RescardMenu/>
                        <Cart/>
                        </Provider>
                        </BrowserRouter>)
                    })
            
                    expect(screen.getAllByTestId("cartitems").length).toBe(1);

        })

         it("should load the cart item number 0  after click on the clearbutton  in the cart component ", async ()=>
                    {
                        await act(async ()=>{
                            render(<BrowserRouter>
                            <Provider store={appstore}>
                                <Header/>
                            <RescardMenu/>
                            <Cart/>
                            </Provider>
                            </BrowserRouter>)
                        })
                
                        const clearbtn=screen.getByRole("button", {name : "X"});
                        fireEvent.click(clearbtn);
                        expect(screen.getByText("🛒 0")).toBeInTheDocument();
                        
        })




//this big one test case is dived into small different test cases 
// it("should load the Resmenu  component ", async ()=>
// {
//     await act(async ()=>{
//         render(<BrowserRouter>
//         <Provider store={appstore}>
//             <Header/>
//         <RescardMenu/>
//         <Cart/>
//         </Provider>
//         </BrowserRouter>)
//     })

//     const accodionaheader = screen.getByText("Match Day Mania Combos (3)");
//     fireEvent.click(accodionaheader);
//     const menuitems = screen.getAllByTestId("menuitems");
//     // console.log(menuitems.length);
//     expect(menuitems.length).toBe(3);



//     const addbtns = screen.getAllByRole("button",{name : "Add+"});
//     // console.log(addbtns.length);
//     expect(screen.getByText("🛒 0")).toBeInTheDocument();
//     fireEvent.click(addbtns[0]);
//     expect(screen.getByText("🛒 1")).toBeInTheDocument();



//     expect(screen.getAllByTestId("cartitems").length).toBe(1);
    //    const clearbtn=screen.getByRole("button", {name : "X"});
    //    fireEvent.click(clearbtn);
    //    expect(screen.getByText("🛒 0")).toBeInTheDocument();


// })


//first -- load the resmenu component
//second -- when click on the add+ button increase the number in header and also load that item into cart component
//third --when click on the X(clearcart) the number in header shoulld be 0 and no item load into cart compoenet (shimmer ui is loaded )