import React, { useCallback, useEffect, useRef, useState } from "react";
import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";
import styles from "./ChatContainer.module.css";
import { ChatMessage } from "../../types/api";

interface ChatContainerProps {
  chats: ChatMessage[];
  handleSend: (message: string) => void;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ handleSend, chats }) => {
  const chatInputRef = useRef<HTMLInputElement>(null);
  const [showLoadingBubble, setShowLoadingBubble] = useState(false);

  //Scroll down to the chat text input, when chats get updated,
  //to keep the chatinput always within view
  useEffect(() => {
    const chatsCount = chats?.length;
    //if the latest chat message is from bot, remove loading bubble
    if (chats[chatsCount - 1]?.sender === "bot") setShowLoadingBubble(false);
    if(chatsCount > 0) chatInputRef?.current?.scrollIntoView();
  }, [chats]);

  const onSend = useCallback(
    (message: string) => {
      setShowLoadingBubble(true);
      handleSend(message);
    },
    [handleSend]
  );

  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <div className={styles.messages}>
          {chats.map((msg) => (
            <ChatBubble key={msg.id} message={msg.text} sender={msg.sender} />
          ))}
          {showLoadingBubble && <ChatBubble type="loading" />}
        </div>

        <ChatInput disabled={showLoadingBubble} onSend={onSend} inputRef={chatInputRef} />
      </div>
    </div>
  );
};

export default ChatContainer;
