import React, { createContext, useState } from "react";

type GlobalContextType = {
  isWrittenModal: boolean;
  setIsWrittenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const GlobalContext = createContext<{
  isWrittenModal: boolean;
  setIsWrittenModal: React.Dispatch<React.SetStateAction<boolean>>;
}>(null as unknown as GlobalContextType);

const GlobalContextProvider = ({ children }: React.PropsWithChildren) => {
  const [isWrittenModal, setIsWrittenModal] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isWrittenModal,
        setIsWrittenModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
