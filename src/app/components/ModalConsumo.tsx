import conta from "@/assets/conta.png";
import { ModalContainer, ModalOverlay, NavButton, SetasContainer } from "@/styles/styled";
import { ModalConsumoProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ModalConsumo({ months, onClose }: ModalConsumoProps) {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [consumoData, setConsumoData] = useState(
    months.map(() => ({ kwh: "", valor: "", imagem: null as File | null }))
  );

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

  return (
    <ModalOverlay>
      <ModalContainer>
        <button className="close" onClick={onClose}>
          ×
        </button>
        <div className="titulo">
          <Image src={conta} alt="ícone fatura" width={50} height={50} />
          <h2>
            Cadastrando o consumo do mês de{" "}
            <span>{months[currentModalIndex].toUpperCase()}</span>
          </h2>
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
            <label htmlFor="upload" className="custom-file-upload">Procurar</label>
            <input
              type="file"
              id="upload"
              onChange={(e) => handleInputChange("imagem", e.target.files?.[0] || null)}
              key={consumoData[currentModalIndex].imagem ? consumoData[currentModalIndex].imagem?.name : "input-reset"}
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
            onClick={() => {
              onClose();
            }}
          >Cadastrar
          </button>
        )}

      </ModalContainer>
    </ModalOverlay>
  );
}