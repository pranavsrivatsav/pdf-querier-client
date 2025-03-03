import styles from "./Conversation.module.css";
import ChatContainer from "../components/conversation/ChatContainer";
import Summary from "../components/conversation/Summary";
import TablesPreview from "../components/tables/TablesPreview";
import { useAppDispatch, useAppSelector } from "../hooks";
import useSocket from "../hooks/useSocket";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { resetChat } from "../store/reducers/chatReducer";

function Conversation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { fileName, tables, summary, uploadId } = useAppSelector(
    (state) => state.file
  );

  useEffect(() => {
    if (!uploadId) {
      navigate("/upload", { replace: true });
    } else {
      //reset chats on mount
      dispatch(resetChat());
    }
  }, [uploadId]);

  if (!uploadId) return <></>;

  const { chats, handleSend } = useSocket(uploadId);

  return (
    <div className={styles.container}>
      <p className={styles.fileName}>{fileName}</p>
      {summary && <Summary title="Summary" content={summary} />}
      {tables && <TablesPreview tables={tables} />}
      <ChatContainer handleSend={handleSend} chats={chats} />
    </div>
  );
}

export default Conversation;
