import Button from "./Button";

// Renders a Modal
// props:
//   show: prop will can be used to show/hide the modal
//   closeHandler: prop is used by Button, will close the modal
const Modal = ({ children, show, closeHandler }) => (
  <>
    {show ?
      <div className="modal-bg">
        <div className="modal">
          <Button onClick={closeHandler} className="btn-close">&#x2715;</Button>
          {children}
        </div>
      </div> : null
    }
  </>
);

export default Modal;