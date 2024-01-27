import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="bg-gray-300 px-4 py-2 rounded-lg flex gap-2 items-center my-2 text-sm text-gray-700">
      <FaUserCircle className="w-4 h-4 text-gray-500" />
      <div className="font-bold">{name}</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
