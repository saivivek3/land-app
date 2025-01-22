// AuthProvider.js
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <GoogleOAuthProvider clientId="14656460906-mf29g5esi879e3dajk1al66cak12qv4h.apps.googleusercontent.com">
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
};

export { useAuth, AuthProvider };
