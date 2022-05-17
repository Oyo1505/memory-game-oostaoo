import React, { useContext, useState, useEffect } from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";

describe("<Message />", () => {
  const MessageComponent = () => {
    const { message } = useContext(StoreContext);
    return (
      <div data-testid="message-test" className="message">
        {message}
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <MessageComponent />
      </StoreProviderWrapper>
    );
    expect(queryByTestId("message-test")).toBeTruthy();
  });
});
