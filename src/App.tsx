import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { PageLoader } from "./components/PageLoader";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { Navigation } from "./components/Navigation";
import { HomePage } from "../pages/HomePage";
import { TokenomicsPage } from "../pages/TokenomicsPage";
import { RoadmapPage } from "../pages/RoadmapPage";
import { EcosystemPage } from "../pages/EcosystemPage";
import { StakingPage } from "../pages/StakingPage";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Initial page loader (logo animation)
    const initialTimer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2000);

    // Skeleton loader (simulate content loading)
    const contentTimer = setTimeout(() => {
      setIsContentLoading(false);
    }, 2800);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "tokenomics":
        return <TokenomicsPage />;
      case "roadmap":
        return <RoadmapPage />;
      case "ecosystem":
        return <EcosystemPage />;
      case "staking":
        return <StakingPage />;
      default:
        return <HomePage />;
    }
  };

  if (isContentLoading) {
    return (
      <>
        <AnimatePresence>
          {isInitialLoading && <PageLoader />}
        </AnimatePresence>
        {!isInitialLoading && <SkeletonLoader />}
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <SmoothScroll />
      
      {/* Header with Navigation */}
      <div className="relative overflow-hidden">
        <Navigation currentPage={currentPage} onNavigate={handleNavigation} />
      </div>

      {/* Page Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
