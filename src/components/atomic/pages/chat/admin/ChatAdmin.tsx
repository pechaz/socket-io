"use client";

import {
  AdminSidebar,
  ChatBubbleAdmin,
  WriteTextAdmin,
} from "@/components/atomic/atoms";
import useChatAdmin from "./useChatAdmin";

const ChatAdmin = () => {
  const {
    text,
    setText,
    conversations,
    sendMessage,
    selectedClientId,
    setSelectedClientId,
  } = useChatAdmin();

  return (
    <div className="bg-[#F0F0F0] flex h-screen">
      <AdminSidebar
        ids={conversations.map((item) => item.clientId)}
        onClick={setSelectedClientId}
      />
      {!!selectedClientId && (
        <div className="p-4 w-full flex flex-col gap-2 h-full">
          <div className="w-full flex flex-col gap-2 flex-1 overflow-auto">
            {conversations
              .find((item) => item.clientId === selectedClientId)
              ?.messages.map((msg, index) => (
                <ChatBubbleAdmin
                  type={msg.isFromAgent ? "admin" : "client"}
                  key={msg.id ? msg.id : index}
                  text={msg.text}
                  className={!msg.isFromAgent ? "self-end" : ""}
                />
              ))}
          </div>

          <WriteTextAdmin
            val={text}
            onValChanged={(val) => setText(val)}
            onSend={() => {
              sendMessage(text);
            }}
            className="w-ful"
          />
        </div>
      )}
    </div>
  );
};

export default ChatAdmin;
