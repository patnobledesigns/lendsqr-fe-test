import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UsersPage from "./pages/dashboard/UsersPage";
import LoginPage from "./pages/authentication/LoginPage";
import UserDetailsPage from "./pages/dashboard/UserDetailsPage";


const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/users",
      element: <UsersPage />,
    },
    {
      path: "/users/:id",
      element: <UserDetailsPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
