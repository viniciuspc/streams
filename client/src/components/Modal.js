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
        <div className="header">{props.title}</div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal