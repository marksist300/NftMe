import { createContext } from "react";
import React from "react";
interface contextType {
  item: string;
}
interface Props {
  children: React.ReactNode;
}

const context = createContext<contextType | null>(null);
const ContextProvider: React.FC<Props> = ({ children }) => {
  return <context.Provider value={null}>{children}</context.Provider>;
};

export { ContextProvider, context };
