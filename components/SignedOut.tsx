import { signIn } from "next-auth/react";
import buttonStyles from "../styles/Button.module.css";

export const SignedOut = () => {
  return (
    <>
      Not signed in <br />
      <button className={buttonStyles.button} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  );
};
