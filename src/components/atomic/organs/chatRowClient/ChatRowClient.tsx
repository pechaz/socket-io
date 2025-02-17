import { ChatBubble } from "../../atoms";
import { IChatRowClientProps } from "./ChatRowClient.interface";

const ChatRowClient = ({ date, text }: IChatRowClientProps) => {
  return (
    <div className="max-w-[85%] flex self-end items-start">
      <div className="flex items-center gap-1">
        <span className="text-[#393939] text-[8px] font-normal text-nowrap">
          {date}
        </span>
        <ChatBubble type="client" text={text} />
      </div>
    </div>
  );
};

export default ChatRowClient;
