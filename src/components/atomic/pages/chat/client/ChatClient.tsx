"use client";

import { ChatRowClient, ChatRowOperator } from "@/components/atomic/organs";
import { ClientHeader } from "@/components/atomic/organs";
import { WriteText } from "@/components/atomic/molecules";
import useChatClient from "./useChatClient";
import { Operator } from "../config";

const ChatClient = () => {
  const { text, setText, messages, handleChat } = useChatClient();

  return (
    <div className="overflow-hidden w-full h-full max-h-screen border-white md:max-w-[366px] md:max-h-[528px] md:rounded-[12px] md:border-1 md:fixed bottom-4 right-4 flex flex-col bg-[#F0F0F0]">
      <ClientHeader />
      <div className="p-4 w-full flex flex-col gap-2 h-full overflow-auto">
        {messages.map((msg, index) => {
          return msg.isFromAgent ? (
            <ChatRowOperator
              key={msg.id ? msg.id : index}
              operatorWidget={Operator}
              date="۱۱:۲۳ ب.ظ"
              text={msg.text}
            />
          ) : (
            <ChatRowClient
              date="۱۱:۲۳ ب.ظ"
              text={msg.text}
              key={msg.id ? msg.id : index}
            />
          );
        })}
      </div>
      <WriteText
        val={text}
        onValChanged={(val) => setText(val)}
        onSend={() => {
          handleChat(text);
        }}
        className="w-full h-14  px-2 py-1 pb-2"
      />
    </div>
  );
};

export default ChatClient;
