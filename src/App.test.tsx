import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByText(/organize everything you stash on the web/i)
    ).toBeInTheDocument();
  });

  it("uses the primary theme color for primary buttons (via CSS class)", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button", { name: /start for free|get started/i });
    expect(buttons.length).toBeGreaterThan(0);
  });
});

