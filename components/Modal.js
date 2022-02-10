import React from "react";

function Modal({ active, setActive, children }) {
  return (
    <>
      <div
        className={active ? "main__modal actives" : "main__modal"}
        onClick={() => setActive(false)}
      >
        <div
          className="main__modalcontent"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
