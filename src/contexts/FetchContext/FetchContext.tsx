import { createContext, ReactNode } from 'react';
import { useFetch } from '../../hooks/useFetch';

interface FetchContextType<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export const FetchContext = createContext<FetchContextType<any> | null>(null);

interface FetchProviderProps {
  url: string;
  options?: RequestInit;
  children: ReactNode;
}

export function FetchProvider<T>({ url, options, children }: FetchProviderProps) {
  const { data, error, loading } = useFetch<T>(url, options);

  return (
    <FetchContext.Provider value={{ data, error, loading }}>
      {children}
    </FetchContext.Provider>
  );
}