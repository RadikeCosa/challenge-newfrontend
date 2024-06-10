import Modal from 'react-modal';

// Establecer appElement para React Modal
Modal.setAppElement('#root');

const VoteModal = ({ isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Resultado de la Verificación del Voto"
    >
      <h2>Resultado de la Verificación del Voto</h2>
      <p>{content}</p>
      <button onClick={closeModal}>Cerrar Modal</button>
    </Modal>
  );
};

export default VoteModal;
