import { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const Message: FC = () => {
  const { message } = useContext(StoreContext);
  return <div className="message">{message}</div>;
};

export default Message;
