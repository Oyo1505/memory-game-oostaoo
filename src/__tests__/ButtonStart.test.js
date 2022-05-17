import React, { useContext, useState, useEffect } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";
import Message from "../components/Message";
afterEach(cleanup);
describe("<ButtonStart />", () => {
  const mockClose = jest.fn();
  const ButtonStart = () => {
    const { startOver, startGame } = useContext(StoreContext);

    return (
      <div style={{ width: "200px" }} data-testid="div">
        <Message />
        <button
          style={{ display: startGame ? "none" : "" }}
          className="button"
          onClick={startOver}
        >
          Start
        </button>
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <ButtonStart />
      </StoreProviderWrapper>
    );
    const div = queryByTestId("div");
    expect(div).toBeInTheDocument();
  });
  test("click on the button", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <ButtonStart onClick={mockClose()} />
      </StoreProviderWrapper>
    );
    const div = queryByTestId("div");
    fireEvent.click(div);
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
