import { IMessage } from "./IMessage";

export interface IConversation {
  clientId: number;
  messages: IMessage[];
  unread: number;
}
