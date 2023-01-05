import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UsersPage from "./pages/dashboard/UsersPage";
import LoginPage from "./pages/authentication/LoginPage";


function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UsersPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/users",
      element: <>Users</>,
    },
    {
      path: "/profile/:id",
      element: <>User Detail</>,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
