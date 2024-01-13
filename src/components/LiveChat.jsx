import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("");
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          text: generateRandomText(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="w-[450px]border border-black  rounded-lg  bg-slate-100 h-[500px] overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage name={c.name} text={c.text} />
        ))}
      </div>
      <form
        className="h-9 border border-gray-200 px-1 "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Bharath Raj",
              text: liveMessage,
            })
          );
          setLiveMessage("");
        }}>
        <input
          className="w-[330px] border border-black p-1 "
          type="text"
          placeholder="Type"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}></input>
        <button
          type="submit"
          className="ml-1x bg-green-300 h-full w-[95px] rounded-lg">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
