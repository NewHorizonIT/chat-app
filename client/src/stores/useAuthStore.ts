import type { IUser } from "@/types";
import { create } from "zustand";

type AuthState = {
  isLogin: boolean;
  token: string | null;
  user: IUser | null;
};

type AuthActions = {
  logout: () => void;
  login: ({ isLogin, token, user }: AuthState) => void;
};

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isLogin: false,
  token: null,
  user: null,
  logout: () => set({ isLogin: false, token: null, user: null }),
  login: ({ isLogin, token, user }) => set({ isLogin, token, user }),
}));

export default useAuthStore;
