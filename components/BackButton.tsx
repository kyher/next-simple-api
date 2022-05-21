import { useRouter } from "next/router";
import buttonStyles from "../styles/Button.module.css";

export const BackButton = () => {
  const router = useRouter();
  return (
    <button className={buttonStyles.button} onClick={() => router.back()}>
      👈 Back
    </button>
  );
};
