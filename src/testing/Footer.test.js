
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


import { BrowserRouter } from "react-router-dom";
import Footer from '../components/layout/Footer'


test("to check whether Footer component rendered", () => {
    render(
      <BrowserRouter>
          <Footer />
      </BrowserRouter>
    );
  });  
  test("should render the Heading ", () => {
    render(<Footer />);
    const element = screen.getByTestId("getintouch");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Get In touch");
  });
  test("should render the heading ", () => {
    render(<Footer />);
    const element = screen.getByTestId("getintouch");
    expect(element).toBeInTheDocument();
    expect(element).not.toContainHTML("<h5>");
  });
  test("should render the text ", () => {
    render(<Footer />);
    const element = screen.getByTestId("farmersfriend");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("Farmers Friend 👩‍👩‍👧");
  });
  test("should render the phone ", () => {
    render(<Footer />);
    const element = screen.getByTestId("phone");
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("8957907453");
  });
  test("should render the email ", () => {
  render(<Footer />);
  const element = screen.getByTestId("email");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("richapandey0297@gmail.com");
});
  