import React, { createContext, useState, useEffect } from 'react'

export const UserDataContext = createContext()


const UserContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Initialize user from localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {
      email: '',
      fullName: {
        firstName: '',
        lastName: ''
      }
    };
  });

  useEffect(() => {
    // Persist user to localStorage whenever it changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext;