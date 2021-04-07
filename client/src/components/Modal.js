import React from 'react'
import ReactDOM from 'react-dom'

const Modal = props => {
  // Creating a portal
  // First argument: JSX of the modal content
  // Second argument: Element to mount the portal on, usualy it is specified at
  // public/index.html
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">
        Modal content
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal