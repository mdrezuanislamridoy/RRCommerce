import context from "./context";

export default function contextProvider({ children }) {
  return <context.Provider>{children}</context.Provider>;
}
