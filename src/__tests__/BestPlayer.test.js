import React, { useContext, useState, useEffect } from "react";
import { render, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StoreContext";

afterEach(cleanup);
describe("Best Player", () => {
  const BestPlayerComponent = () => {
    const { items } = useContext(StoreContext);
    const [itemsLocal, setItems] = useState({ playerName: "test", points: 0 });
    useEffect(() => {
      // @ts-ignore
      const items = JSON.parse(localStorage.getItem("items"));

      if (items) {
        setItems(items);
      }
    }, [items]);

    if (!itemsLocal.playerName && !itemsLocal.points)
      return <p>Personne à joué</p>;
    return (
      <div className="best-score" data-testid="best-player">
        Le meilleur joueur est {itemsLocal.playerName} avec {itemsLocal.points}{" "}
        points
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByTestId } = render(
      <StoreProviderWrapper>
        <BestPlayerComponent />
      </StoreProviderWrapper>
    );
    expect(queryByTestId("best-player")).toBeTruthy();
  });
});
