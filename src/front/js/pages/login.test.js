import { render, screen } from "@testing-library/react";
import loginpage from "./Loginpage";

test("renders learn react link", () => {
  render(<loginpage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
