import React, { useContext, useState } from "react";
import { userObjTemplate } from "./constants";
const UserDetContext = React.createContext();
const UserDetUpdateContext = React.createContext();

export function useLoginDet() {
  return useContext(UserDetContext);
}
export function useUpdateLoginDet() {
  return useContext(UserDetUpdateContext);
}
export function UserDetailsProvider({ children }) {
  const [userDetails, setUserDetails] = useState(userObjTemplate);
  const setUserData = (value) => {
    setUserDetails(value);
  };

  return (
    <UserDetContext.Provider value={userDetails}>
      <UserDetUpdateContext.Provider value={setUserData}>
        {children}
      </UserDetUpdateContext.Provider>
    </UserDetContext.Provider>
  );
}
