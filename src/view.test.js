import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event"
import  View  from "./components/PostSection/view";


test("renders testing user", async() => {
    const testText =" "
    render(<View />);
  
    const input = screen.getByTestId("text-input");
    UserEvent.type(input, testText)

    const textElement = await screen.findByText(testText)
     expect(textElement).toBeInTheDocument();
    
  });