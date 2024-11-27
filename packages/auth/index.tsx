import * as React from "react";

type UseAuthValue = {
  userName: string;
};

const AuthContext = React.createContext<UseAuthValue | undefined>(undefined);
AuthContext.displayName = "authContext";

export function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ userName: "Some user" }}>
      {children}
    </AuthContext.Provider>
  );
}
