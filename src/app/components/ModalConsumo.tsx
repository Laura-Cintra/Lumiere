import { ModalContainer, ModalOverlay, NavButton, SetasContainer } from "@/styles/styled";
import { ModalConsumoProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import conta from "@/assets/conta.png";

export default function ModalConsumo ({ months, onClose }: ModalConsumoProps){

  const [currentModalIndex, setCurrentModalIndex] = useState(0); // Rastreia o modal atual
  const isFirstModal = currentModalIndex === 0;
  const isLastModal = currentModalIndex === months.length - 1;

  const handleNext = () => {
    if (!isLastModal) setCurrentModalIndex(currentModalIndex + 1);
  };

  const handlePrevious = () => {
    if (!isFirstModal) setCurrentModalIndex(currentModalIndex - 1);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <button className="close" onClick={onClose}>×</button>
        <div className="titulo">
            <Image src={conta} alt="ícone fatura" width={50} height={50}/>
            <h2>Cadastrando o consumo do mês de <span>{months[currentModalIndex].toUpperCase()}</span></h2>
        </div>
        <form>
          <label>KWH total do mês:</label>
          <input type="number" placeholder="Digite o kWh" />

          <label>Valor da conta:</label>
          <input type="text" placeholder="Digite o valor (R$)" />

          <label>Insira a imagem da conta de luz:</label>
          <div className="fileContainer">
            <input type="file" id="upload"/>
          </div>
          <p>obs: essa imagem servirá apenas para autenticação. Depois ela será descartada.</p>
        </form>

        <SetasContainer>
          <NavButton onClick={handlePrevious} disabled={isFirstModal}>
            <FiChevronLeft />
          </NavButton>
          <NavButton onClick={handleNext} disabled={isLastModal}>
            <FiChevronRight />
          </NavButton>
        </SetasContainer>

        {isLastModal && <button type="submit" className="cadastrar-button">Cadastrar</button>}
      </ModalContainer>
    </ModalOverlay>
  );
};