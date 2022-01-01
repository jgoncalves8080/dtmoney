import { useState } from 'react';
import Modal from 'react-modal';
import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova transação
        </button>

        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h1>Nova transação</h1>
        </Modal>
      </Content>
    </Container>
  );
}
