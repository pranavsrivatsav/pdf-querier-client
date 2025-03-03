import React, { useState } from "react";
import styles from "./Header.module.css";
import Alert from "./helperComponents/Alert";

const alertMsg =
  "This action will discontinue the current session and start a new session.";

const Header: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className={styles.header}>
      <p className={styles.title} onClick={handleLogoClick}>
        PDF Querier
      </p>
      {renderButton()}
      {showAlert && (
        <Alert
          alertMsg={alertMsg}
          handleCancel={handleCancel}
          handleOk={handleOk}
        />
      )}
    </div>
  );

  function renderButton() {
    return (
      <div className={styles.buttonContainer} onClick={handleNewSession}>
        <p className={styles.buttonText}>New Session</p>
      </div>
    );
  }

  function handleLogoClick() {
    const inConsequentialPathNames = ["/upload", "/"];
    const path = window.location.pathname;

    //open alert
    if (!inConsequentialPathNames.includes(path)) {
      setShowAlert(true);
    }
  }

  function handleNewSession() {
    window.open(window.location.origin + "/upload", "_blank");
  }

  function handleOk() {
    window.location.href = window.location.origin + "/upload";
    setShowAlert(false);
  }

  function handleCancel() {
    setShowAlert(false);
  }
};

export default Header;
