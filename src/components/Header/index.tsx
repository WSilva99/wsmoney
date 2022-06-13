import { Container, Content, Logo } from "./style";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <i className="fas fa-sack-dollar"></i>
          wsmoney
        </Logo>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}