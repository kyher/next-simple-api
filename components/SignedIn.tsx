import { signOut } from "next-auth/react";
import buttonStyles from "../styles/Button.module.css";

type props = {
  email: string;
};

export const SignedIn = ({ email }: props) => {
  return (
    <>
      Signed in as {email ? email : "Not signed in"} <br />
      <button className={buttonStyles.button} onClick={() => signOut()}>
        Sign out
      </button>
    </>
  );
};
