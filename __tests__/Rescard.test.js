import { render, screen } from "@testing-library/react"
import Rescard, { withprometedlabel } from "../components/Rescard";
import MOCK_DATA from "../mocks/rescardtestmockdata.json"
import "@testing-library/jest-dom";



it("should load the one rescard with props inside res conatiner",()=>
{

    render(<Rescard resdata={MOCK_DATA}/>);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();

})

//we crate mock_data for pass it as props 

it("should load the withprometd label with rescard",()=>
{

   const Rescardprometed = withprometedlabel(Rescard);

    render(<Rescardprometed resdata={MOCK_DATA} />);
    const label =screen.getByText("Promoted");

    expect(label).toBeInTheDocument();
});


//we can't render direct function in render() so first we do declaraation (ResPrometed )

