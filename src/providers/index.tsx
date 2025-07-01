"use client";

import ReactQueryProvider from "./ReactQueryProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;
