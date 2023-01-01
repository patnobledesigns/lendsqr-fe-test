import React, { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>HomePage</h1>,
    },
    {
      path: "/login",
      element: <>Login</>,
    },
    {
      path: "/dashboard",
      element: <>Dashboard</>,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
