import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  const updateUser = (newUserData) => {
    setUser({ ...user, ...newUserData });
  };
