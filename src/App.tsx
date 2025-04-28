
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";

// Service Pages
import HomeExtensions from "./pages/HomeExtensions";
import LoftConversions from "./pages/LoftConversions";
import DomesticBuilding from "./pages/DomesticBuilding";
import CommercialBuilding from "./pages/CommercialBuilding";
import NewBuilds from "./pages/NewBuilds";
import GardenWalls from "./pages/GardenWalls";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ScrollToTop />
          <TooltipProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Service Detail Pages */}
              <Route path="/services/home-extensions" element={<HomeExtensions />} />
              <Route path="/services/loft-conversions" element={<LoftConversions />} />
              <Route path="/services/domestic-building" element={<DomesticBuilding />} />
              <Route path="/services/commercial-building" element={<CommercialBuilding />} />
              <Route path="/services/new-builds" element={<NewBuilds />} />
              <Route path="/services/garden-walls" element={<GardenWalls />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
