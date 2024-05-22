import { render  , screen} from "@testing-library/react";
import Contect from "../components/ContectUs";
import "@testing-library/jest-dom";

describe("contact us page text cases ",()=>{
it('should load the contect component', () => {
    render(<Contect/>);

    const heading = screen.getByRole("heading");
    // const heading = screen.getByText("this is contect us page");

    expect(heading).toBeInTheDocument();
  
});   

test('should load the  button in contect component', () => {
    render(<Contect/>);

    
    // const button = screen.getByRole("button");
    const button = screen.getByText("submit");

    expect(button).toBeInTheDocument();
  
});

test('should load the  input email in contect component', () => {
    render(<Contect/>);

    const email =screen.getByPlaceholderText("@gmail.com")
    
    expect(email).toBeInTheDocument();
  
});


test('should load 2  input boxes in contect component', () => {
    render(<Contect/>);


    //querying
    const inputbox =screen.getAllByRole("textbox");

    // console.log(inputbox); // it is array of object 
    console.log(inputbox[0]); // this is basically virtual dom react element (in object )(react-fiber node )(jsx element )(react-element)
    console.log(inputbox.length);
    
    expect(inputbox.length).toBe(2);
    // expect(inputbox.length).not.toBe(3);
  
});

});


// grouped the test cases in describe
// test==it(lot of people use it )
//first render in jsdom then write query and then assertion