import styles from "./Conversation.module.css";
import ChatContainer from "../components/conversation/ChatContainer";
import Summary from "../components/conversation/Summary";
import TablesPreview from "../components/tables/TablesPreview";
import { useAppSelector } from "../hooks";

function Conversation() {
  const {fileName, tables, summary} = useAppSelector((state) => state.file);

  return (
    <div className={styles.container}>
      <p className={styles.fileName}>{fileName}</p>
      {summary && <Summary title="Summary" content={summary} />}
      {tables && <TablesPreview tables={tables} />}
      <ChatContainer />
    </div>
  );
}

export default Conversation;
