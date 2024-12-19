import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter(); // Always call useRouter unconditionally

  useEffect(() => {
    setIsClient(true); // Set client-side flag after component mount
  }, []);

  if (!isClient) return null; // Skip rendering on the server-side

  if (loading) return <p>Loading...</p>;

  // Add your route protection logic here
  if (!user) {
    router.push('/login'); // Redirect to login if user is not authenticated
    return null; // Avoid rendering children
  }

  return <>{children}</>;
};

export default ProtectedRoute;
