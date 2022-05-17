import { FC, useState, useEffect, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const BestPlayer: FC = () => {
  const { items } = useContext(StoreContext);
  const [itemsLocal, setItems] = useState({ playerName: "", points: 0 });
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
    <div className="best-score">
      Le meilleur joueur est {itemsLocal.playerName} avec {itemsLocal.points}
      points
    </div>
  );
};

export default BestPlayer;
