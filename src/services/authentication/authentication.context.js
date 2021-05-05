import React, { useState, createContext } from 'react';
import { loginRequest, registerRequest } from './authentication.service';
import * as firebase from 'firebase';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    setLoading(true);

    try {
      const user = await loginRequest(email, password);
      setUser(user);
      setLoading(false);
      setError('');
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  };
  const onRegister = async (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const user = await registerRequest(email, password);
      setUser(user);
      setLoading(false);
      setError('');
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  };

  const onLogout = () => {
    setUser(null);
    firebase.auth().signOut();
  };
  return (
    <AuthenticationContext.Provider
      value={{
        user,
        loading,
        error,
        onRegister,
        onLogin,
        onLogout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
