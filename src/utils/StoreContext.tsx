import { createContext, useState, useEffect, useCallback } from "react";
import cards from "../asset/json/card.json";

export type ContextProps = {
  openCards: any[];
  startGame: boolean;
  cardsChosen: any[];
  message: string;
  modalIsOpen: boolean;
  points: number;
  playerName: string;
  items: object;
  handleStartGame: () => void;
  isCardChosen: (cardName: string, index: number) => boolean;
  startOver: () => void;
  timeOver: () => void;
  closeModal: () => void;
  handleOnclick: (cardName: string, index: number) => void;
  handleChange: (e: any) => void;
  finishGame: () => boolean;
  handleMessage: (str: string) => void;
};

const StoreContext = createContext<ContextProps>({} as ContextProps);
interface props {
  children: JSX.Element | JSX.Element[];
}

const StoreProviderWrapper = ({ children }: props) => {
  //Game
  const [openCards, setOpenCards] = useState<any[]>([]);
  const [cardsChosen, setCardsChosen] = useState<any[]>([]);
  const [cardsChosenIds, setCardsChosenIds] = useState<any[]>([]);
  const [startGame, setStartGame] = useState<boolean>(false);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("");
  function startOver() {
    if (playerName === "") {
      setMessage("Player Name require");
      return;
    }
    handleStartGame();
    setMessage("");
  }

  const evaluate = (cardName: string, index: number) => {
    if (cardsChosenIds?.length === 1 && cardsChosenIds[0] === index) {
      return;
    }

    if (cardsChosen?.length < 2) {
      setCardsChosen((cardsChosen) => cardsChosen?.concat(cardName));
      setCardsChosenIds((cardsChosenIds) => cardsChosenIds?.concat(index));

      if (cardsChosen?.length === 1) {
        // Check if images are the same

        if (cardsChosen[0] === cardName) {
          setPoints((points) => points + 2);
          setOpenCards((openCards) =>
            openCards?.concat([cardsChosen[0], cardName])
          );
        }
        setTimeout(() => {
          setCardsChosenIds([]);
          setCardsChosen([]);
        }, 700);
      }
    }
  };

  const handleOnclick = (cardName: string, index: number) => {
    if (startGame && !finishGame()) {
      evaluate(cardName, index);
    }
  };

  function isCardChosen(cardName: string, index: number) {
    return cardsChosenIds?.includes(index) || openCards?.includes(cardName);
  }

  const finishGame = useCallback(() => {
    return cards.cards.length === openCards.length ? true : false;
  }, [openCards]);
  const handleStartGame = () => {
    setCardsChosenIds([]);
    setCardsChosen([]);
    setOpenCards([]);
    setStartGame(true);
    closeModal();
  };

  //TIMER
  const timeOver = () => {
    setStartGame(false);
    setMessage("Perdu");
  };
  const handleMessage = (str: string) => {
    setMessage(str);
  };
  //Modal
  const [modalIsOpen, setIsOpen] = useState(true);
  function closeModal() {
    setIsOpen(false);
  }

  //Player
  const [playerName, setPlayerName] = useState<string>("");
  const handleChange = (e: any) => {
    setPlayerName(e.target.value);
  };

  // create item to Local Storage
  const [items, setItems] = useState({ playerName: "", points: 0 });
  useEffect(() => {
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem("items"));

    if (items) {
      setItems(items);
    }
  }, []);

  //Update score o local storage
  const updateScore = useCallback(() => {
    if (points > items.points) {
      setItems({ playerName, points });
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [points, items, playerName]);

  useEffect(() => {
    updateScore();
  }, [updateScore]);

  useEffect(() => {
    if ((!startGame || finishGame()) && points > items.points && points > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [startGame, finishGame, items, playerName, points]);
  return (
    <StoreContext.Provider
      value={{
        playerName,
        cardsChosen,
        modalIsOpen,
        openCards,
        points,
        startGame,
        message,
        items,
        startOver,
        closeModal,
        handleStartGame,
        handleChange,
        handleMessage,
        handleOnclick,
        isCardChosen,
        timeOver,
        finishGame,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProviderWrapper };
