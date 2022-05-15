import { useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const Message = () => {
  const { message } = useContext(StoreContext);
  return <div>{message}</div>;
};

export default Message;
