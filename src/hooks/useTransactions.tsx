import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

type CreateTransaction = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextValues {
  transactions: Transaction[];
  createTransaction: (transaction: CreateTransaction) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextValues>({} as TransactionsContextValues);

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(res => {
        setTransactions(res.data.transactions);
      });
  }, []);

  async function createTransaction(transaction: CreateTransaction) {
    const res = await api.post('/transactions', transaction);
    setTransactions([...transactions, res.data.transaction]);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}