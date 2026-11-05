import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';


interface MecanicoContextType {
  mecanico: string;
  especialidad: string;
  setMecanico: (mecanico: string) => void;
  setEspecialidad: (especialidad: string) => void;
}


const MecanicoContext = createContext<
  MecanicoContextType | undefined
>(undefined);


interface MecanicoProviderProps {
  children: ReactNode;
}


export function MecanicoProvider({
  children,
}: MecanicoProviderProps) {
  const [mecanico, setMecanico] = useState<string>(
    'Rahi Ruilova'
  );

  const [especialidad, setEspecialidad] = useState<string>(
    'Frenos'
  );

  return (
    <MecanicoContext.Provider
      value={{ mecanico, setMecanico, especialidad, setEspecialidad }}
    >
      {children}
    </MecanicoContext.Provider>
  );
}


export function useMecanico(): MecanicoContextType {
  const context = useContext(MecanicoContext);


  if (context === undefined) {
    throw new Error(
      'useMecanico debe utilizarse dentro de MecanicoProvider'
    );
  }


  return context;
}
