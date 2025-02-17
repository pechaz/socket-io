import { ChatBubble } from "../../atoms";
import OperatorWidget from "../../molecules/operatorWidget/OperatorWidget";
import { IChatRowOperatorProps } from "./ChatRowOperator.interface";

const ChatRowOperator = ({
  date,
  operatorWidget,
  text,
}: IChatRowOperatorProps) => {
  return (
    <div className="max-w-[85%] flex items-start gap-1">
      <OperatorWidget {...operatorWidget} />
      <div className="flex items-center gap-1">
        <ChatBubble type="admin" text={text} />
        <span className="text-[#393939] text-[8px] font-normal text-nowrap">
          {date}
        </span>
      </div>
    </div>
  );
};

export default ChatRowOperator;
