import styles from "./ChatBubble.module.css";
import loadingBubble from "../../assets/loading-bubble.svg";
interface ChatBubbleProps {
  type?: "loading";
  message?: string;
  sender?: "user" | "bot";
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  sender = "bot",
  type,
}) => {
  if (type === "loading") {
    return (
      <div className={`${styles.bubble} ${styles.bot} ${styles.loading}`}>
        <img src={loadingBubble} className={styles.loadingImage}/>
      </div>
    );
  }

  return (
    <div
      className={`${styles.bubble} ${
        sender === "user" ? styles.user : styles.bot
      }`}
    >
      {message}
    </div>
  );
};

export default ChatBubble;
