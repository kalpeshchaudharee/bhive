import { useContext } from 'react';
import { FetchContext } from './FetchContext';

export function useFetchContext<T>() {
  const context = useContext(FetchContext);

  if (!context) {
    throw new Error('useFetchContext must be used within a FetchProvider');
  }

  return context as { data: T | null; error: string | null; loading: boolean };
}