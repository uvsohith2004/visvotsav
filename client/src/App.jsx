import Navbar from "./components/navbar"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "@/layouts/main-layout";
import MainPage from "@/pages/main-page";
import RegisterPage from "@/pages/register-page";
import LoadingScreen from "./components/loading";
import { useEffect, useState } from "react";
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
    ],
  },
]);
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => {
      // Set a 3-second delay after the window has loaded
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };

    if (document.readyState === 'complete') {
      handleLoadComplete();
    } else {
      window.addEventListener('load', handleLoadComplete);
    }

    return () => {
      window.removeEventListener('load', handleLoadComplete);
    };
  }, []);
return (
  <>{isLoading ? (
    <LoadingScreen />
  ) : (
    <RouterProvider router={router} />
  )}
  </>
)
} 
export default App
