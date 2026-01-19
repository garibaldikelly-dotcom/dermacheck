function InciModal({ close }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>¿Qué es INCI?</h3>
        <p>
          INCI estandariza los nombres de ingredientes cosméticos para
          transparencia al consumidor.
        </p>
        <button className="btn-primary" onClick={close}>
          Entendido
        </button>
      </div>
    </div>
  );
}

export default InciModal;
