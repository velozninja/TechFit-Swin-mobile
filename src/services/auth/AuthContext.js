import { createContext, useEffect, useState } from "react";
import { getToken } from "./TokenService";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({
    token: null,
    role: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadToken() {
      const storedToken = await SecureStore.getItemAsync("jwt_token");
      if (storedToken) {
        const decoded = jwtDecode(storedToken);
        setUser({
          token: storedToken,
          role: decoded.role
        });
      }
      setLoading(false);
    }
    loadToken();
  }, []);

  return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
  );
}