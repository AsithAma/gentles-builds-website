
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-construction-500 mb-6">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">Oops! Page not found</p>
        <p className="text-gray-600 max-w-md text-center mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
