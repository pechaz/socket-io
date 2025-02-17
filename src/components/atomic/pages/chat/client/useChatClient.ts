import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import { IMessage } from "@/models/IMessage";

const useChatClient = () => {
  const [clientId, setClientId] = useState(0);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([
    {
      clientId: 0,
      id: "",
      isFromAgent: true,
      text: "ابتدا نام خود را وارد کنید",
      timestamp: "",
    },
  ]);

  const socket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER);

  socket.on("connect", () => {
    //TODO
  });

  socket.on("message", (message: IMessage) => {
    setMessages((val) => [...val, message]);
  });

  const registerUser = (username: string) => {
    const id = Math.round(Math.random() * 1000000);
    try {
      socket.emit("register-user", {
        clientId: id,
        name: username,
      });
      setClientId(id);
      setMessages((val) => [
        ...val,
        {
          clientId,
          id: "",
          isFromAgent: false,
          text: username,
          timestamp: "",
        },
        {
          clientId,
          id: "",
          isFromAgent: true,
          text: "شروع کنید",
          timestamp: "",
        },
      ]);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      // TODO
    }
  };

  const sendMessage = (text: string) => {
    try {
      socket.emit("user-message", {
        clientId,
        text,
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      // TODO
    }
  };

  const handleChat = (text: string) => {
    if (clientId) {
      sendMessage(text);
    } else {
      registerUser(text);
    }
    setText("");
  };

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);
  return { text, messages, setText, handleChat };
};

export default useChatClient;
