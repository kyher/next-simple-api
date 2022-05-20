import { useRouter } from "next/router";

export const BackButton = () => {
  const router = useRouter();
  return <button onClick={() => router.back()}>👈 Back</button>;
};
