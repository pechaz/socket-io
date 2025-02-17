export interface IMessage {
  id: string;
  text: string;
  clientId: number;
  timestamp: string;
  isFromAgent: boolean;
}
