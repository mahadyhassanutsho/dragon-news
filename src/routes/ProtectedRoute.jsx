import { Navigate, useLocation } from "react-router";
import { useAuth } from "../providers/AuthProvider";
import LoadingPage from "../pages/LoadingPage";

export default function ProtectedRoute({ children }) {
  const { user, isPending } = useAuth();
  const location = useLocation();

  if (isPending) return <LoadingPage />;

  if (!user)
    return <Navigate state={location.pathname} to="/auth/login" replace />;

  return children;
}
