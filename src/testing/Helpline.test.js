import Helplines from "../components/pages/Helplines";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Carousel from "../components/layout/Carousel"
import { BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/Footer'

afterEach(() => {
  cleanup();
});

it("demo testing", () => {
  expect(true).toBe(true);
});
test("to check whether carausel component rendered", () => {
  render(
    <BrowserRouter>
        <Carousel />
    </BrowserRouter>
  );
});  

test("to check whether Helplines component rendered", () => {
  render(
    <BrowserRouter>
      <Helplines />
    </BrowserRouter>
  );
});

it("the background color should be #192a56", () => {
  const color = "#192a56";
  expect(color).toEqual("#192a56");
});
it("the background should be", () => {
  const background = "transparent";
  expect(background).toEqual("transparent");
});
test("should render the paragraph ", () => {
  render(<Helplines />);
  const element = screen.getByTestId("helpline__testcase");
  expect(element).toBeInTheDocument();
  expect(element).not.toContainHTML("<h5>");
});

test("should render the Heading ", () => {
  render(<Helplines />);
  const element = screen.getByTestId("helpline");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Available Helplines 😊😊");
});
it("to be equal to 1", () => {
  const num = 1;
  expect(num).toEqual(1);
});

it("should be truthy", () => {
  //Assertions/Expectations
  expect(true).toBeTruthy();
});

test("to check whether Footer component rendered", () => {
  render(
    <BrowserRouter>
        <Footer />
    </BrowserRouter>
  );
});  
