import React from 'react'
import ReactDOM from 'react-dom'
import history from '../history';

const Modal = props => {
  // Creating a portal
  // First argument: JSX of the modal content
  // Second argument: Element to mount the portal on, usualy it is specified at
  // public/index.html
  return ReactDOM.createPortal(
    <div onClick={() => history.push('/')} className="ui dimmer modals visible active">
      <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want delete the stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal