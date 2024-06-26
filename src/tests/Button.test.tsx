import "@testing-library/jest-dom";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button", () => {
   afterEach(() => cleanup());

   it("Renders", () => {
      render(<Button data-testid="btn" colorScheme="green" />);
      const button = screen.getByTestId("btn");

      expect(button).toBeInTheDocument();
   });

   it("Fires an event on onClick", () => {
      const fn = jest.fn();
      render(<Button onClick={fn} data-testid="btn" />);

      const button = screen.getByTestId("btn");
      fireEvent.click(button);
      expect(fn).toHaveBeenCalled();
   });
});
