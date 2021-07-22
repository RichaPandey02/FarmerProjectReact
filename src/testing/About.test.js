import About from "../components/pages/About";
import {render,screen,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

it("demo testing",()=>{
    expect(true).toBe(true);
})
it("it should be contain the following text",()=>{
    const result="Agriculture"
    expect(result).toBe(result);
})
test('should render About component',()=>{
    render(<About/>);
    const element=screen.getByTestId('testcase');
     expect(element).toBeInTheDocument();
     
})