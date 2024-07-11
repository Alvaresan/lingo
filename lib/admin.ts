import { auth } from "@clerk/nextjs/server";

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return userId === "user_2dpiOCIFrIc3Bqp6urtJRzd3jAq";
};
