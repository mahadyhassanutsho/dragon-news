import { use, useState, useEffect, createContext } from "react";
import { logoutUser, subscribeToAuth } from "../services/firebase";

const AuthContext = createContext({
  user: null,
  isPending: true,
  // eslint-disable-next-line no-unused-vars
  login: (user) => {},
  logout: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const auth = use(AuthContext);
  if (!auth) throw new Error("useAuth is Only usable inside AuthProvider");
  return auth;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const login = (user) => setUser(user);

  const logout = () => logoutUser();

  useEffect(() => {
    const unsubscribe = subscribeToAuth((user) => setUser(user));
    setIsPending(false);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, isPending, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
