import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import api from '../lib/axios';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at?: string;
  updated_at?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  validationErrors: Record<string, string[]> | null;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (credentials: { name: string; email: string; password: string; password_confirmation: string }) => Promise<void>;
  logout: () => Promise<void>;
  clearErrors: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string[]> | null>(null);

  // Initialize auth state: check if user is already logged in
  const checkAuth = async () => {
    try {
      setLoading(true);
      const response = await api.get('/api/user');
      setUser(response.data);
    } catch (err: any) {
      // If unauthorized, user is not logged in, ignore error
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const clearErrors = () => {
    setError(null);
    setValidationErrors(null);
  };

  const login = async (credentials: { email: string; password: string }) => {
    try {
      setLoading(true);
      clearErrors();
      
      // 1. Initialize CSRF token
      await api.get('/sanctum/csrf-cookie');
      
      // 2. Perform Login via Fortify /login route
      await api.post('/login', credentials);
      
      // 3. Fetch user details upon success
      await checkAuth();
    } catch (err: any) {
      if (err.response?.status === 422) {
        setValidationErrors(err.response.data.errors || null);
        setError(err.response.data.message || 'Validation failed. Please check your credentials.');
      } else {
        setError(err.response?.data?.message || 'Login failed. Please try again.');
      }
      setLoading(false);
      throw err;
    }
  };

  const register = async (credentials: { name: string; email: string; password: string; password_confirmation: string }) => {
    try {
      setLoading(true);
      clearErrors();
      
      // 1. Initialize CSRF token
      await api.get('/sanctum/csrf-cookie');
      
      // 2. Perform registration via Fortify /register route
      await api.post('/register', credentials);
      
      // 3. Fetch user details upon success
      await checkAuth();
    } catch (err: any) {
      if (err.response?.status === 422) {
        setValidationErrors(err.response.data.errors || null);
        setError(err.response.data.message || 'Registration failed. Please check validation errors.');
      } else {
        setError(err.response?.data?.message || 'Registration failed. Please try again.');
      }
      setLoading(false);
      throw err;
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      clearErrors();
      // Perform logout via Fortify /logout route
      await api.post('/logout');
      setUser(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Logout failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, validationErrors, login, register, logout, clearErrors }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
