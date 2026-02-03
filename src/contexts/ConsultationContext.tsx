import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import ConsultationModal from "@/components/ConsultationModal";

interface ConsultationContextType {
  openConsultation: () => void;
  closeConsultation: () => void;
}

const defaultContext: ConsultationContextType = {
  openConsultation: () => {},
  closeConsultation: () => {},
};

const ConsultationContext = createContext<ConsultationContextType>(defaultContext);

export const useConsultation = () => {
  return useContext(ConsultationContext);
};

export const ConsultationProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = useCallback(() => setIsOpen(true), []);
  const closeConsultation = useCallback(() => setIsOpen(false), []);

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation }}>
      {children}
      <ConsultationModal open={isOpen} onOpenChange={setIsOpen} />
    </ConsultationContext.Provider>
  );
};
