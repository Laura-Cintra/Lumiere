"use client"

import React, { useState, useContext } from "react";
import conta from "@/assets/conta.png";
import { ModalContainer, ModalOverlay, NavButton, SetasContainer } from "@/styles/styled";
import { ModalConsumoProps } from "@/types";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AuthContext } from "@/context";
import { useRouter } from "next/navigation";

export default function ModalConsumo({ months, onClose }: ModalConsumoProps) {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [consumoData, setConsumoData] = useState(
    months.map(() => ({ kwh: "", valor: "", imagem: null as File | null }))
  );

  const navigate = useRouter();

  const { user, updatePontuacao } = useContext(AuthContext);

  const isFirstModal = currentModalIndex === 0;
  const isLastModal = currentModalIndex === months.length - 1;

  const handleNext = () => {
    if (!isLastModal) setCurrentModalIndex(currentModalIndex + 1);
  };

  const handlePrevious = () => {
    if (!isFirstModal) setCurrentModalIndex(currentModalIndex - 1);
  };

  const handleInputChange = (field: string, value: string | File | null) => {
    setConsumoData((prev) =>
      prev.map((item, index) =>
        index === currentModalIndex ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSubmit = async () => {
    if (!user || !user.id_usuario) {
      console.error("Erro: id do usuário não disponível.");
      alert("Erro: ID do usuário não encontrado.");
      return;
    }

    const dataToSend = consumoData.map((data, index) => ({
      dataConsumo: months[index].value, // Usa o valor formatado "YYYY-MM"
      consumoKwh: parseInt(data.kwh || "0", 10),
      custoConta: parseFloat(data.valor.replace(",", ".") || "0"),
      idUsuario: user.id_usuario,
    }));

    const errors: string[] = []; // Para acumular erros

  try {
    await Promise.all(
      dataToSend.map(async (consumo, index) => {
        try {
          const response = await fetch(
            "http://localhost:8080/consumoresource/inserirNovoConsumo",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(consumo),
            }
          );

          if (!response.ok) {
            const errorData = await response.json();
            errors.push(`Erro no mês ${months[index].name}: ${errorData.message}`);
          } else {
            console.log(`Consumo do mês ${months[index].name} enviado com sucesso!`);
          }
        } catch (error) {
          errors.push(`Erro ao enviar o mês ${months[index].name}: ${error}`);
        }
      })
    );

    if (errors.length > 0) {
      alert(`Alguns meses não foram cadastrados:\n${errors.join("\n")}`);
    } else {
      alert("Todos os meses foram cadastrados com sucesso!");
      const response_rank = await fetch(
        `http://localhost:8080/usuarioresource/atualizaPorcentagemStatus/${user.id_usuario}`,
        {
          method: "PUT"
        }
      );
      const insere_rank = await fetch(
        `http://localhost:8080/rankingresource/inserirRanking`
      );
      if(response_rank.ok && insere_rank.ok){
        console.log("Ranking atualizado com sucesso!")
        await updatePontuacao(); // Atualiza a pontuação no contexto
      }
      else{
        console.log("Erro ao atualizar ranking")
      }
      navigate.push('/');
    }
  } catch (error) {
    console.error("Erro geral ao enviar os dados de consumo:", error);
    alert("Erro ao processar as requisições. Tente novamente.");
  } finally {
    onClose();
  }
};

  return (
    <ModalOverlay>
      <ModalContainer>
        <button className="close" onClick={onClose}>
          ×
        </button>
        <div className="titulo">
          <Image src={conta} alt="ícone fatura" width={50} height={50} />
          <h2>Cadastrando o consumo do mês de <span>{months[currentModalIndex].name.toUpperCase()}</span></h2>
        </div>
        <form>
          <label>KWH total do mês:</label>
          <input
            type="number"
            placeholder="Digite o kWh"
            value={consumoData[currentModalIndex].kwh}
            onChange={(e) => handleInputChange("kwh", e.target.value)}
          />

          <label>Valor da conta:</label>
          <input
            type="text"
            placeholder="Digite o valor (R$)"
            value={consumoData[currentModalIndex].valor}
            onChange={(e) => handleInputChange("valor", e.target.value)}
          />

          <label>Insira a imagem da conta de luz:</label>
          <div className="fileContainer">
            <label htmlFor="upload" className="custom-file-upload">
              Procurar
            </label>
            <input
              type="file"
              id="upload"
              onChange={(e) =>
                handleInputChange("imagem", e.target.files?.[0] || null)
              }
              key={
                consumoData[currentModalIndex].imagem
                  ? consumoData[currentModalIndex].imagem?.name
                  : "input-reset"
              }
            />
            {consumoData[currentModalIndex].imagem ? (
              <p>{(consumoData[currentModalIndex].imagem as File).name}</p>
            ) : (
              <p>Nenhum arquivo selecionado.</p>
            )}
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

        {isLastModal && (
          <button
            type="button"
            className="cadastrar-button"
            onClick={handleSubmit}
          >Cadastrar</button>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
}