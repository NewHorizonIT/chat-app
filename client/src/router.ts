import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { authLoader } from "./lib/loaders/authLoader";
const LoginPage = lazy(() => import("@/routes/auth/Login"));
const AuthLayout = lazy(() => import("@/routes/auth/AuthLayout"));
const HomePage = lazy(() => import("@/routes/Home"));
const ErrorBoundary = lazy(() => import("@/routes/Error"));
const RootLayout = lazy(() => import("@/routes/Layout"));
const ChatLayout = lazy(() => import("@/routes/chat/ChatLayout"));
const ChatPage = lazy(() => import("@/routes/chat/Chat"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            path: "login",
            Component: LoginPage,
          },
          {
            path: "sign-up",
          },
        ],
      },
      {
        path: "chat",
        Component: ChatLayout,
        loader: authLoader,
        children: [
          {
            index: true,
            path: ":id",
            Component: ChatPage,
          },
        ],
      },
    ],
  },
]);

export default router;
