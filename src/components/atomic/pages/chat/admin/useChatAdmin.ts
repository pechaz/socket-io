import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { io, Socket } from "socket.io-client";

import { IMessage } from "@/models/IMessage";
import { IConversation } from "@/models/IConversation";
import { IClient } from "@/models/IClient";
import { conversationsStore } from "./conversationsStore";

const useChatAdmin = () => {
  const [text, setText] = useState("");
  const [selectedClientId, setSelectedClientId] = useState(0);
  const conversations = useSyncExternalStore(
    conversationsStore.subscribe,
    conversationsStore.getSnapshot
  );

  const socketRef = useRef<Socket>(null);

  const registerAgent = () => {
    socketRef.current?.emit("register-agent");
  };

  const sendMessage = (text: string) => {
    if (!selectedClientId) {
      return;
    }

    try {
      socketRef.current?.emit("agent-message", {
        clientId: selectedClientId,
        text,
      });
      setText("");
      const newConversations = conversationsStore.getSnapshot();
      newConversations
        .find((conversation) => conversation.clientId === selectedClientId)
        ?.messages.push({
          clientId: selectedClientId,
          id: "",
          isFromAgent: true,
          text: text,
          timestamp: "",
        });
      conversationsStore.replaceConversation(newConversations);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      // TODO
    }
  };

  useEffect(() => {
    socketRef.current = io(process.env.NEXT_PUBLIC_SOCKET_SERVER);
    socketRef.current.connect();

    socketRef.current.on(
      "existing-conversations",
      ({
        conversations,
      }: {
        conversations: IConversation[];
        clients: IClient[];
      }) => {
        conversationsStore.replaceConversation(conversations);
      }
    );

    socketRef.current.on(
      "new-user-message",
      ({
        conversation,
      }: {
        message: IMessage;
        conversation: IConversation;
      }) => {
        const newConversations = conversationsStore
          .getSnapshot()
          .map((item) => {
            return item.clientId === conversation.clientId
              ? conversation
              : item;
          });
        conversationsStore.replaceConversation(newConversations);
      }
    );

    socketRef.current.on(
      "user-connected",
      ({ conversation }: { conversation: IConversation }) => {
        conversationsStore.addConversation(conversation);
      }
    );

    socketRef.current.on("connect", () => {
      registerAgent();
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return {
    text,
    conversations,
    selectedClientId,
    setSelectedClientId,
    setText,
    sendMessage,
  };
};

export default useChatAdmin;
