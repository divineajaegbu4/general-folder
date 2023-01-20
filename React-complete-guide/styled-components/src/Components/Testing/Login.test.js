import { fireEvent, render, screen } from "@testing-library/react"
import Login from "./Login";

test("username input should be rendered", ()=>{
    render(<Login/>)
    const userInputEl = screen.getByPlaceholderText(/username/i);
    expect(userInputEl).toBeInTheDocument();
})

test("password should be rendered", ()=>{
    render(<Login/>)
    const passwordInputEl = screen.getByPlaceholderText(/password/i);
    expect(passwordInputEl).toBeInTheDocument();
})

test("button should be rendered", ()=>{
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button");
    expect(buttonInputEl).toBeInTheDocument();
})

test("username input should be rendered active", ()=>{
    render(<Login/>)
    const valueInputEl = screen.getByPlaceholderText(/username/i);
    const testValue="test";

    fireEvent.change(valueInputEl, {target:{value: testValue}})
    expect(valueInputEl.value).toBe(testValue);
})

test("password input should be rendered active", ()=>{
    render(<Login/>)
    const passwordValueInputEl = screen.getByPlaceholderText(/password/i);
    const testValue="test";

    fireEvent.change(passwordValueInputEl, {target:{value: testValue}})
    expect(passwordValueInputEl.value).toBe(testValue);
})

test("button should be disabled", ()=>{
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button");

    expect(buttonInputEl).toBeDisabled();
})

test("loading button should not be rendered", ()=>{
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button");

    expect(buttonInputEl).not.toHaveTextContent(/please wait/i);
})

test("button should be rendered when user clikc", ()=>{
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button");
    const valueInputEl = screen.getByPlaceholderText(/username/i);
    const passwordValueInputEl = screen.getByPlaceholderText(/password/i);

    const testValue="test";

    fireEvent.change(valueInputEl, {target:{value: testValue}});
    fireEvent.change(passwordValueInputEl, {target:{value: testValue}});
    fireEvent.click(buttonInputEl);

    expect(buttonInputEl).toHaveTextContent(/please wait/i);
})


test("button should not be disabled when input exit", ()=>{
    render(<Login/>)
    const buttonInputEl = screen.getByRole("button");
    const valueInputEl = screen.getByPlaceholderText(/username/i);
    const passwordValueInputEl = screen.getByPlaceholderText(/password/i);

    const testValue="test";

    fireEvent.change(valueInputEl, {target:{value: testValue}});
    fireEvent.change(passwordValueInputEl, {target:{value: testValue}});

    expect(buttonInputEl).not.toBeDisabled();
})



test("error message should not be visible", ()=>{
    render(<Login/>)
    const errorEl = screen.getByTestId("error");
    expect(errorEl).not.toBeVisible();
})


