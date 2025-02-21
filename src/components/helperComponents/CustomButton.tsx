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
  let buttonClass =
    (styles[type] || styles.primary) + " " + styles.btn
  let loadingClass = loading ? styles.loading : "";
  const buttonRef = createRef<HTMLButtonElement>();
  const [buttonWidth, setButtonWidth] = useState<string>("auto");

  // Set button width on initial render so that width doesn't change when loading
  useEffect(() => {
    if (buttonRef.current && !loading) {
      setButtonWidth(`${buttonRef.current.offsetWidth}px`);
    }
  }, []);

  return (
    <button
      style={{ width: buttonWidth }}
      ref={buttonRef}
      className={buttonClass + " " + loadingClass}
      onClick={onClick}
      disabled={loading}
    >
      {!loading && children}
      {loading && <img src={loadingRing} className={styles.loadingImage} alt="loading" />}
    </button>
  );
};

export default CustomButton;
