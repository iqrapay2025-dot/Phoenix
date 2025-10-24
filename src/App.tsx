import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProblemSolution } from "./components/ProblemSolution";
import { HowToJoin } from "./components/HowToJoin";
import { Tokenomics } from "./components/Tokenomics";
import { Roadmap } from "./components/Roadmap";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { PageLoader } from "./components/PageLoader";
import { SkeletonLoader } from "./components/SkeletonLoader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isContentLoading, setIsContentLoading] = useState(true);

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
      <Hero />
      <About />
      <ProblemSolution />
      <HowToJoin />
      <Tokenomics />
      <Roadmap />
      <Community />
      <Footer />
    </div>
  );
}