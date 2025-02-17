import { IChatBubbleAdminProps } from "./ChatBubbleAdmin.interface";

const ChatBubbleAdmin = ({ text, type, className }: IChatBubbleAdminProps) => {
  return (
    <div
      className={`w-full max-w-[50%] flex items-center justify-center p-2 rounded-t-[8px] ${
        type === "admin"
          ? "rounded-bl-[8px] bg-white"
          : "rounded-br-[8px] bg-[#841474]"
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

export default ChatBubbleAdmin;
