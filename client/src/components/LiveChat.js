import ChatMessage from "./ChatMessage";
import { HiSignal } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomNames } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  const [liveMsg, setLiveMsg] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomMessage(20),
        })
      );
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-gray-200 m-2 p-4 rounded-xl w-auto">
      <div className="font-bold flex items-center gap-1 mb-2">
        <HiSignal className="w-5 h-5 text-red-600" />
        Live Chat:
      </div>
      <div className="overflow-y-scroll h-96 flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="flex w-full my-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "You",
              message: liveMsg,
            })
          );
          setLiveMsg("");
        }}
      >
        <input
          className="rounded-lg py-2 px-4 w-full"
          placeholder="Chat here"
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="text-white bg-red-600 py-2 px-4 rounded-2xl mx-2 cursor-pointer hover:bg-gray-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
