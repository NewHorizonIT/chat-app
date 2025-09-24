import useAuthStore from "@/stores/useAuthStore";
import { redirect } from "react-router";

export const authLoader = () => {
  const user = useAuthStore.getState().user;

  if (!user) {
    throw redirect("/auth/login");
  }
};
