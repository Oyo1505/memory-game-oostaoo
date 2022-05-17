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
  totalSeconds: number;
  initialSeconds: number;
  initialProgress: number;
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
  //Start the game
  function startOver() {
    if (playerName.trim() === "") {
      setMessage("Player Name require");
      return;
    }
    handleStartGame();
    setMessage("");
  }
  //eveluate two cards cards
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
  const totalSeconds = 10;
  const initialSeconds = 0;
  const initialProgress = (initialSeconds / totalSeconds) * 100;
  const timeOver = () => {
    setStartGame(false);
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
      localStorage.setItem("items", JSON.stringify({ playerName, points }));
      setItems({ playerName, points });
    }
  }, [points, items, playerName]);

  useEffect(() => {
    updateScore();
  }, [updateScore]);

  useEffect(() => {
    if ((!startGame || finishGame()) && points > items.points && points > 0) {
      updateScore();
    }
  }, [startGame, finishGame, items, playerName, points, updateScore]);

  return (
    <StoreContext.Provider
      value={{
        playerName,
        totalSeconds,
        cardsChosen,
        modalIsOpen,
        openCards,
        points,
        startGame,
        message,
        items,
        initialSeconds,
        initialProgress,
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
