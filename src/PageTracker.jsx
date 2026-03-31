import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('config', 'G-3FB7PEZGZQ', {
      page_path: location.pathname,
    });
  }, [location]);

  return null;
};

export default PageTracker;