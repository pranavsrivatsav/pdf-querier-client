import styles from "./CustomButton.module.css";
import loadingRing from "../../assets/loading-ring.svg";
import {
  ReactNode,
  MouseEventHandler,
  useEffect,
  useState,
  createRef,
} from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: "primary" | "secondary" | "warning" | "black";
  loading?: boolean;
};

const CustomButton = ({ children, onClick, type, loading }: ButtonProps) => {
  let buttonClass = (styles[type] || styles.primary) + " " + styles.btn;
  let loadingClass = loading ? styles.loading : "";
  const buttonRef = createRef<HTMLButtonElement>();
  const [buttonWidth, setButtonWidth] = useState<string>("auto");
  const [buttonHeight, setButtonHeight] = useState<string>("auto");

  // Set button width and height so it doesn't change when loading svg is shown
  useEffect(() => {
    if (buttonRef.current && !loading) {
      setButtonWidth(`${buttonRef.current.offsetWidth}px`);
      setButtonHeight(`${buttonRef.current.offsetHeight}px`);
    }
  }, [buttonRef, loading]);

  return (
    <button
      style={{
        width: loading ? buttonWidth : "auto",
        height: loading ? buttonHeight : "auto",
      }}
      ref={buttonRef}
      className={buttonClass + " " + loadingClass}
      onClick={onClick}
      disabled={loading}
    >
      {!loading && children}
      {loading && (
        <img src={loadingRing} className={styles.loadingImage} alt="loading" />
      )}
    </button>
  );
};

export default CustomButton;
