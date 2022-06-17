import React from "react";
import { render, screen } from "@testing-library/react";
import  App  from "./App";


test("renders React Axios example", () => {
    render(<App />);
  
    expect(screen.queryByText('React Axios example - netlify 11/06/2022')).not.toBe(null);
    
  });
