import { CloseButton, ModalContentMessage, ModalOverlay } from "@/styles/styled";
import { ModalProps } from "@/types";

export default function ModalMessage({ open, onClose, children }: ModalProps) {
  return (
    <ModalOverlay open={open} onClick={onClose}>
      <ModalContentMessage onClick={(e) => e.stopPropagation()} open={open}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContentMessage>
    </ModalOverlay>
  );
}
