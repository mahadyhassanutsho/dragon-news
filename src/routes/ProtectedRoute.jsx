import { Navigate } from "react-router";
import { useAuth } from "../providers/AuthProvider";
import LoadingPage from "../pages/LoadingPage";

export default function ProtectedRoute({ children }) {
  const { user, isPending } = useAuth();

  if (isPending) return <LoadingPage />;

  if (!user) return <Navigate to="/auth/login" replace />;

  return children;
}
