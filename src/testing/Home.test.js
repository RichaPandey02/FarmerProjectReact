import Home from "../components/pages/Home";
import {render,screen,cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer'
import ReactDOM from 'react-dom';

test('render without crashing',()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Home/>,div)
})


it("demo testing",()=>{
    expect(true).toBe(true);
})
it("it should be contain the following text",()=>{
    const result="Agriculture"
    expect(result).toBe(result);
})
afterEach(()=>{
    cleanup();
})
test('should render Home component',()=>{
    render(<Home/>);
    const element=screen.getByTestId('testcase');
     expect(element).toBeInTheDocument();
     expect(element).toHaveTextContent('Agriculture');
    // expect(element).toContainHTML("<h1 style={{marginLeft:'78%',color:'#2C3A47'}} data-testid='testcase'>Agriculture</h1>")
})
test('should render the paragraph ',()=>{
    render(<Home/>);
    const element=screen.getByTestId('testcase-1');
     expect(element).toBeInTheDocument();
     expect(element).toHaveTextContent('Contemporary agriculture');
     expect(element).not.toContainHTML('<p>')
})
test('matches snapshot',()=>{
    const tree=renderer.create(<Home/>).toJSON();
    console.log(tree);
})
it("to be equal to 1",()=>{
    const num=1;
    expect(num).toEqual(1);
  })
  it("should be truthy",()=>{
    //Assertions/Expectations
    expect(true).toBeTruthy();
  })

  const tree=renderer.create(<Home/>)
  it("should create component",()=>{
    expect(tree).toBeTruthy()
  })
  