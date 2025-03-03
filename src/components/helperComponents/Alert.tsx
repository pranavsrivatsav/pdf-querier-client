
import Modal from "./Modal";
import CustomButton from "./CustomButton";
import styles from "./Alert.module.css"

type Props = {
    alertMsg: string,
    handleOk: ()=> void,
    handleCancel: ()=> void,
};

function Alert({alertMsg ,handleOk, handleCancel,}: Props) {
  return (
    <Modal isOpen={true} disableClickEscape={true}>
      <div className={styles.container}>
        <p className={styles.alertMsg}>{alertMsg}</p>
        {renderButtons()}
      </div>
    </Modal>
  );

  function renderButtons() {
    return <div className={styles.buttonsContainer}>
      <CustomButton type="warning" onClick={handleOk}>OK</CustomButton>
      <CustomButton type="primary" onClick={handleCancel}>Cancel</CustomButton>
    </div>;
  }
}

export default Alert;
