import React from 'react';
import { Overlay, Content, CloseButton, ActionButton, CancelButton } from '@/styles/styled';
import { ModalProps } from '@/types';

const Modal: React.FC<ModalProps> = ({ open, onClose, onAction, children }) => {
    return (
        <Overlay open={open} onClick={onClose}>
            <Content open={open} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                {children}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    {onAction && <ActionButton onClick={onAction}>Confirmar</ActionButton>}
                    <CancelButton onClick={onClose}>Cancelar</CancelButton>
                    
                </div>
            </Content>
        </Overlay>
    );
}

export default Modal;