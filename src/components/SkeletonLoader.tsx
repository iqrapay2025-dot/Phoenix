import { Skeleton } from "./ui/skeleton";
import { Card } from "./ui/card";

export function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Skeleton */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/90 to-slate-950"></div>
        
        {/* Navigation Skeleton */}
        <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="w-12 h-12 rounded-lg" />
            <Skeleton className="w-32 h-6" />
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-20 h-4" />
            <Skeleton className="w-32 h-10 rounded-lg" />
          </div>
        </nav>

        {/* Hero Content Skeleton */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="w-48 h-8 mx-auto mb-6 rounded-full" />
            <Skeleton className="w-full max-w-3xl h-16 mx-auto mb-6" />
            <Skeleton className="w-full max-w-2xl h-12 mx-auto mb-8" />
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Skeleton className="w-48 h-14 rounded-lg" />
              <Skeleton className="w-32 h-12 rounded-lg" />
              <Skeleton className="w-32 h-12 rounded-lg" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 p-6">
                  <Skeleton className="w-24 h-10 mx-auto mb-2" />
                  <Skeleton className="w-32 h-4 mx-auto" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Skeletons */}
      {[1, 2, 3, 4, 5].map((section) => (
        <section key={section} className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Skeleton className="w-64 h-12 mx-auto mb-4" />
              <Skeleton className="w-96 h-6 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3].map((card) => (
                <Card key={card} className="bg-slate-800/50 border-slate-700 p-8">
                  <Skeleton className="w-12 h-12 mb-4 rounded-lg" />
                  <Skeleton className="w-full h-6 mb-3" />
                  <Skeleton className="w-full h-4 mb-2" />
                  <Skeleton className="w-3/4 h-4" />
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer Skeleton */}
      <footer className="bg-slate-900/50 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <Skeleton className="w-32 h-5" />
            </div>
            <div className="flex gap-4">
              <Skeleton className="w-10 h-10 rounded-lg" />
              <Skeleton className="w-10 h-10 rounded-lg" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
