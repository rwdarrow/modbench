import { createContext } from "react";

interface IAppContext {
  osType: string | undefined;
  isInitialized: boolean;
  test: number;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
