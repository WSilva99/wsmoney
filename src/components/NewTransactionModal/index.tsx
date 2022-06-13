import { FormEvent, useState } from "react";
import ReactModal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, RadioBox, TransactionTypeContainer } from "./style";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  const {createTransaction} = useTransactions();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const transaction = { title, amount, category, type };
    await createTransaction(transaction);
    onRequestClose();
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
  }

  return (
    <ReactModal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button" 
        title="Fechar" 
        onClick={onRequestClose} 
        className="modal-close"
      >
        <i className="fas fa-close" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova Transação</h2>
        <input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number" 
          placeholder="Valor" 
          value={amount !== 0 ? amount : ''}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <i className="fas fa-angles-up" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <i className="fas fa-angles-down" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  )
}