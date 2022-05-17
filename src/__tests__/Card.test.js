import React, { FC, useContext, useState, useEffect } from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";
import { debug } from "console";
afterEach(cleanup);
describe("<Card />", () => {
  const mockClose = jest.fn();
  const name = "test";
  const imageSrc = "image.jpg";
  const index = 1;
  const Card = ({ name, image, index }) => {
    const { handleOnclick, isCardChosen } = useContext(StoreContext);
    const handleClick = (name, index) => {
      handleOnclick(name, index);
    };

    return (
      <div
        data-testid="card"
        role="test"
        className={`cards ${isCardChosen(name, index) ? "is-flipped" : ""}`}
        onClick={() => handleClick(name, index)}
      >
        <img
          data-testid="image"
          src={
            isCardChosen(name, index)
              ? image
              : "https://i.pinimg.com/originals/91/2c/48/912c489ca7b9b0c2412043bc7ea6bfbe.jpg"
          }
          alt={""}
          width={150}
          height={150}
        />
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <Card name={name} image={imageSrc} index={index} />
      </StoreProviderWrapper>
    );
    expect(queryByTestId("card")).toBeTruthy();
  });
  test("src image is back card ", () => {
    render(
      <StoreProviderWrapper>
        <Card name={name} image={imageSrc} index={index} />
      </StoreProviderWrapper>
    );
    const image = screen.getByTestId("image");

    expect(image.src).toContain(
      "https://i.pinimg.com/originals/91/2c/48/912c489ca7b9b0c2412043bc7ea6bfbe.jpg"
    );
  });
  test("test  click on Card ", () => {
    render(
      <StoreProviderWrapper>
        <Card
          name={name}
          image={imageSrc}
          index={index}
          onClick={mockClose()}
        />
      </StoreProviderWrapper>
    );
    const divCard = screen.getByTestId("card");
    fireEvent.click(divCard);
    expect(mockClose).toHaveBeenCalledTimes(1);
  });
});
