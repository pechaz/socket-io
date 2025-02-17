import { IConversation } from "@/models/IConversation";

let conversations: IConversation[] = [];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let listeners: any[] = [];

export const conversationsStore = {
  addConversation(conversation: IConversation) {
    conversations = [...conversations, conversation];
    emitChange();
  },

  replaceConversation(newConversations: IConversation[]) {
    conversations = newConversations;
    emitChange();
  },

  subscribe(listener: unknown) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return conversations;
  },
};

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}
