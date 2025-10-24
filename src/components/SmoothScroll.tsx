import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling and browser history
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Handle clicks on hash links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          
          // Update URL and create history entry
          window.history.pushState(null, '', href);
          
          // Scroll to element
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    // Listen for browser back/forward buttons
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    
    // Listen for clicks on hash links
    document.addEventListener('click', handleClick);

    // Handle initial hash on page load
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
}
