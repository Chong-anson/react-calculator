import React, { useState } from 'react';
import { useGlobalState } from "react-global-state-hook"

export const Modal = () => {
  const [config, setConfig] = useGlobalState("modal", "");

  if (config === "") {
    return null;
  }

  const closeModal = () => {
    setConfig("")
  }

  return (
    <div className="modal" onClick={closeModal} >
      <div onClick={ (e) => e.stopPropagation() }>
        {config}
      </div>
    </div>
  )
}