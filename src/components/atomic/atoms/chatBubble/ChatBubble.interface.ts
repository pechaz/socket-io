export type CHAT_BUBLE_TYPE = "admin" | "client";

export interface IChatBubbleProps {
  type: CHAT_BUBLE_TYPE;
  text: string;
  className?: string;
}
