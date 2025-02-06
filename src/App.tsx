import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./components/auth/AuthPage";
import { WalletProvider } from "./components/wallet/WalletProvider";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Streaks from "./pages/Streaks";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Initialize auth state if it doesn't exist
if (typeof window !== 'undefined') {
  if (!localStorage.getItem("isAuthenticated")) {
    localStorage.setItem("isAuthenticated", "false");
  }
}

const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem("isAuthenticated") === "true";
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = isAuthenticated();
  
  useEffect(() => {
    console.log("Auth state in PrivateRoute:", auth);
  }, [auth]);

  return auth ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  <PrivateRoute>
                    <Index />
                  </PrivateRoute>
                } 
              />
              <Route path="/auth" element={<AuthPage />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/streaks"
                element={
                  <PrivateRoute>
                    <Streaks />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
};

export default App;