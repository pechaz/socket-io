import { IChatBubbleProps } from "./ChatBubble.interface";

const ChatBubble = ({ text, type, className }: IChatBubbleProps) => {
  return (
    <div
      className={`w-full flex items-center justify-center p-2 border border-[#E0E0E0] rounded-t-[8px] ${
        type === "admin"
          ? "rounded-bl-[8px] bg-white"
          : "rounded-br-[8px] bg-[#5B4DFF]"
      } ${className ?? ""}`}
    >
      <span
        className={`text-[12px] font-medium ${
          type === "admin" ? "text-[#000000CC]" : "text-white"
        }`}
      >
        {text}
      </span>
    </div>
  );
};

export default ChatBubble;
