import { useState, useEffect, createContext, useContext, ReactNode } from "react";

type User = {
  username: string;
  password: string;
  confirmPassword: string;
};


type UserContextType = {
  userData: User[];
};
const UserContext = createContext<UserContextType| undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        console.log("Error while fetching", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};