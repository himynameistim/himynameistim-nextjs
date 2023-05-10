import { MouseEventHandler } from "react";
import styles from "@src/styles/button.module.scss";

export interface ButtonProps extends React.PropsWithChildren {
  onClick?: MouseEventHandler | undefined;
}

export default function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
}
