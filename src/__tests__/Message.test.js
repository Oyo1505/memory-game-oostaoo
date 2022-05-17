import React, { useContext, useState, useEffect } from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";

describe("<Message />", () => {
  const MessageComponent = () => {
    const message = "message";
    return (
      <div data-testid="message-test" className="message">
        {message}
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByTestId } = render(<MessageComponent />);
    expect(queryByTestId("message-test")).toBeTruthy();
  });
  test("it text message correctly", () => {
    const { getByText } = render(<MessageComponent />);
    expect(getByText("message")).toBeDefined();
  });
});
