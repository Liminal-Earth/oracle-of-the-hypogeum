
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";
import ReadingPage from "./pages/ReadingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cards" element={<CardsPage />} />
              <Route path="/reading" element={<ReadingPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="py-6 bg-muted/30 border-t border-border">
            <div className="container text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Oracle of the Hypogeum</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
