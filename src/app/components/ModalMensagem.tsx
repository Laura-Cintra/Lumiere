"use client";

import conta from "@/assets/conta.png";
import { ModalContainer, ModalOverlay } from "@/styles/styled";
import { ModalConsumoProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import ModalConsumo from "./ModalConsumo";

function getLastMonths(): { name: string; value: string }[] {
    const monthNames = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
  
    const now = new Date();
    const months = [];
  
    for (let i = 2; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - (i + 1), 1);  // Corrigido para pegar os três meses anteriores
      const name = monthNames[date.getMonth()]; // Nome do mês
      const value = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}`; // Formato "YYYY-MM"
      months.push({ name, value });
    }
  
    return months;
  }  

export default function ModalMensagem({ onClose }: ModalConsumoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [months, setMonths] = useState<{ name: string; value: string }[]>([]);

  const handleOpenModal = () => {
    const calculatedMonths = getLastMonths(); // Calcula os meses dinamicamente
    setMonths(calculatedMonths); // Define os meses no estado
    setIsModalOpen(true); // Abre o modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <button className="close" onClick={onClose}>
          ×
        </button>
        <div className="titulo">
          <Image src={conta} alt="ícone fatura" width={50} height={50} />
          <h2>Cadastrando o consumo dos últimos 3 meses</h2>
        </div>
        <div className="p-apresentacao">
          <p>
            Bem-vindo(a) à Lumière! Tudo começa com uma ação, nesse caso uma
            ação consciente! Nosso sistema de pontuação começa com a análise
            das três últimas contas dos últimos três meses. Com base nesses
            registros, vamos montar seu dashboard personalizado e calcular sua
            pontuação inicial deste mês.
          </p>
        </div>
        <button className="cadastrar-button" onClick={handleOpenModal}>
          Começar
        </button>

        {isModalOpen && (
          <ModalConsumo
            months={months} // Meses calculados dinamicamente
            onClose={handleCloseModal} // Função para fechar o modal
          />
        )}
      </ModalContainer>
    </ModalOverlay>
  );
}