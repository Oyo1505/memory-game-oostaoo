import React, { useContext, useState, useEffect } from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";

describe("<FormName />", () => {
  const FormName = () => {
    const { handleChange, playerName } = useContext(StoreContext);
    return (
      <div>
        <input
          data-testid="form-name"
          type="text"
          value={playerName}
          required
          onChange={handleChange}
        />
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <FormName />
      </StoreProviderWrapper>
    );
    const form = queryByTestId("form-name");
    expect(form).toBeInTheDocument();
  });
});
