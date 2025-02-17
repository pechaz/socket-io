import { CHAT_BUBLE_TYPE } from "../chatBubble/ChatBubble.interface";

export interface IChatBubbleAdminProps {
  type: CHAT_BUBLE_TYPE;
  text: string;
  className?: string;
}
