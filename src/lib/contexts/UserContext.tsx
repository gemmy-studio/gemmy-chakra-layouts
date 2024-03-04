import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export interface User {
  id: string | null;
  image: string | null;
  nickname: string | null;
  email: string | null;
}

interface UserContextType {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

const defaultUserState: User = {
  id: null,
  image: null,
  nickname: null,
  email: null,
};

export const UserContext = createContext<UserContextType>({
  user: defaultUserState,
  setUser: () => {},
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(defaultUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
