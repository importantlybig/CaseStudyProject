import React from "react";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header className="headerModal">
          <h2>{props.titleModal}</h2>
        </header>
        <div className="content">
          <p>{props.messageModal}</p>
        </div>
        <div className="action">
          <button onClick={props.onConfirm} className="buttons">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
