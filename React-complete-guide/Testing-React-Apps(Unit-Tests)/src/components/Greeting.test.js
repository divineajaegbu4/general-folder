import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    //Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    //Assert
    const hellowWorldElement = screen.getByText("Hello world!");
    expect(hellowWorldElement).toBeInTheDocument();
  });

  //Second Test

  test("renders It's good to see you!", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Arrange
    const itsGoodToSeeYou = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(itsGoodToSeeYou).toBeInTheDocument();
  });

  //Third Test

  test("renders Changed", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Arrange
    const changed = screen.getByText("Changed", { exact: false });
    expect(changed).toBeInTheDocument();
  });

  //Fourth Test

  test("renders It's good to see you!", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElementNotRender = screen.getByRole("button");
    userEvent.click(buttonElementNotRender);

    //Arrange
    const NotRender = screen.queryByText("It's good to see you!", {
      exact: true,
    });
    expect(NotRender).toBeNull();
  });
});
