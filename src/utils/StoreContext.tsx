import { createContext, useState, useEffect } from "react";
import cards from "../asset/json/card.json";

export type ContextProps = {
  handleOnclick: (cardName: string, index: number) => void;
  openCards: any[];
  startGame: boolean;
  cardsChosen: any[];
  message: string;
  handleStartGame: () => void;
  isCardChosen: (cardName: string, index: number) => boolean;
  startOver: () => void;
  timeOver: () => void;
  closeModal: () => void;
  modalIsOpen: boolean;
  points: number;
  playerName: string;
  handleChange: (e: any) => void;
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
    if (startGame || finishGame()) {
      evaluate(cardName, index);
    }
  };

  function isCardChosen(cardName: string, index: number) {
    return cardsChosenIds?.includes(index) || openCards?.includes(cardName);
  }

  const finishGame = () => {
    return cards.cards.length === openCards.length;
  };
  const handleStartGame = () => {
    setCardsChosenIds([]);
    setCardsChosen([]);
    setOpenCards([]);
    setStartGame(true);
    closeModal();
  };

  //ProgressBar
  const timeOver = () => {
    setStartGame(false);
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
        startOver,
        closeModal,
        handleStartGame,
        handleChange,
        handleOnclick,
        isCardChosen,
        timeOver,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProviderWrapper };
