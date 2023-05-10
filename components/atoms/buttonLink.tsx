import React from "react";
import styles from "@src/styles/button.module.scss";

export interface ButtonLinkProps extends React.PropsWithChildren {
  href: string | undefined;
}
export default function ButtonLink(props: ButtonLinkProps) {
  return (
    <a href={props.href} className={styles.btn}>
      {props.children}
    </a>
  );
}
