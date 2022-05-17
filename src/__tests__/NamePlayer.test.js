import React, { useContext, useState, useEffect } from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";

describe("<NamePlayer />", () => {
  const NamePlayer = () => {
    const { playerName } = useContext(StoreContext);
    return <h2 data-testid="name-player">{playerName}</h2>;
  };
  test("I render correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <NamePlayer />
      </StoreProviderWrapper>
    );
    expect(queryByTestId("name-player")).toBeTruthy();
  });
  test(" render empty name correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <NamePlayer />
      </StoreProviderWrapper>
    );
    expect(queryByTestId("name-player")).not.toBe("");
  });
});
