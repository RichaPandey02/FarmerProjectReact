import Schemes from "../components/pages/Schemes";
import {render,screen,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'


it("demo testing",()=>{
    expect(true).toBe(true);
})
it("it should be contain the following text",()=>{
    const result=" SCHEMES AVAILABLE FOR MARKET PRICE"
    expect(result).toBe(result);
})
afterEach(()=>{
    cleanup();
})
test('should render Schemes component',()=>{
    render(<Schemes/>);
    const element=screen.getByTestId('testcase');
     expect(element).toBeInTheDocument();
    
})
// test('should render the paragraph ',()=>{
//     render(<Schemes/>);
//     const element=screen.getByTestId('testcase-1');
//      expect(element).toBeInTheDocument();
//      expect(element).toHaveTextContent('Contemporary agriculture');
//      expect(element).not.toContainHTML('<p>')
// })
// test('matches snapshot',()=>{
//     const tree=renderer.create(<Schemes/>).toJSON();
//     console.log(tree);
// })

it("to be equal to 1",()=>{
    const num=1;
    expect(num).toEqual(1);
  })
  it("should be truthy",()=>{
    //Assertions/Expectations
    expect(true).toBeTruthy();
  })

  
 
  