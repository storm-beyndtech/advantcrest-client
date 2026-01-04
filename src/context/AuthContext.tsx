import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { clearSession, persistSession } from '@/lib/authHeaders';
import { apiGet } from '@/utils/api';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("");
  const [fetching, setFetching] = useState(true);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const location = useLocation();

  const login = (userData: any, token?: string) => {
    setUser(userData);
    persistSession(userData, token);
  };

  const logout = () => {
    clearSession();
    setUser(null);
  };

  const fetchUser = async (userId: string) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const res = await apiGet(`${url}/users/${userId}`);
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      console.error('Fetch error:', error.message);
    } finally {
      clearTimeout(timeoutId);
      setFetching(false);
    }
  };

  useEffect(() => {
    setFetching(true);
    const storageData = localStorage.getItem('user');

    if (storageData) {
      try {
        const user = JSON.parse(storageData);
        if (user && user._id) {
          fetchUser(user._id);
        } else {
          setUser(null);
          setFetching(false);
        }
      } catch (error) {
        console.error('Parse error:', error);
        setUser(null);
        setFetching(false);
      }
    } else {
      setUser(null);
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    const storageData = localStorage.getItem('user');
    if (storageData) {
      try {
        const user = JSON.parse(storageData);
        if (user && location.pathname.includes('/dashboard')) {
          fetchUser(user._id);
        }
      } catch (error) {
        console.error('Parse error on pathname change:', error);
      }
    }
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={{ user, fetching, fetchUser, login, logout, setTheme, theme }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export const contextData = useAuthContext;
