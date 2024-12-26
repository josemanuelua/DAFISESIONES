import React from "react";
import './Modal.css'

interface ModalProps{
    isOpen: boolean;
    onClose: ()=> void;
    title: string;
    children: React.ReactNode;
};

//El modal se visualizará o no en ItemList dependiendo de si isOpen es true o false
const Modal:React.FC<ModalProps> = ({isOpen,onClose,title,children})=>{
    if(!isOpen) return null;
    return(
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <div>{children}</div>
                <button onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );

};

export default Modal;