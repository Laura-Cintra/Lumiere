import conta from "@/assets/conta.png";
import { ModalContainer, ModalOverlay } from "@/styles/styled";
import { ModalConsumoProps } from "@/types";
import Image from "next/image";
import { useContext, useState } from "react";
import { AuthContext } from "@/context";

export default function ModalConsumo({ months, onClose }: ModalConsumoProps) {
  const { user } = useContext(AuthContext);

  const [consumoData, setConsumoData] = useState({
    kwh: "",
    valor: "",
    imagem: null as File | null,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (field: string, value: string | File | null) => {
    setConsumoData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCadastro = async () => {
    const { kwh, valor } = consumoData;

    if (!kwh || !valor) {
      setErrorMessage("Todos os campos precisam ser preenchidos.");
      return;
    }

    if (!user || !user.id_usuario) {
      console.error("Erro: id do usuário não disponível.");
      alert("Erro: ID do usuário não encontrado.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/consumoresource/inserirNovoConsumo",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dataConsumo: months[0]?.value, // Usando o valor formatado do primeiro mês
            consumoKwh: parseInt(kwh, 10),
            custoConta: parseFloat(valor.replace(",", ".")),
            idUsuario: user.id_usuario,
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage("Consumo cadastrado com sucesso!");
        setErrorMessage("");
        alert("Mês cadastrado com sucesso!");
        setConsumoData({ kwh: "", valor: "", imagem: null });
        onClose();
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Erro ao cadastrar consumo.");
      }
    } catch (error) {
      setErrorMessage(`Erro ao conectar ao servidor. ${error}`);
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
          <h2>Cadastrando o consumo do mês de <span>{months[0]?.name}</span></h2>
        </div>
        <form>
          <label>KWH total do mês:</label>
          <input
            type="number"
            placeholder="Digite o kWh"
            value={consumoData.kwh}
            onChange={(e) => handleInputChange("kwh", e.target.value)}
          />

          <label>Valor da conta:</label>
          <input
            type="text"
            placeholder="Digite o valor (R$)"
            value={consumoData.valor}
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
              accept=".pdf"
              onChange={(e) =>
                handleInputChange("imagem", e.target.files?.[0] || null)
              }
              key={
                consumoData.imagem ? consumoData.imagem?.name : "input-reset"
              }
            />
            {consumoData.imagem ? (
              <p>{(consumoData.imagem as File).name}</p>
            ) : (
              <p>Nenhum arquivo selecionado.</p>
            )}
          </div>
          <p>
            obs: essa imagem servirá apenas para autenticação. Depois ela será
            descartada.
          </p>
        </form>

        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <button
          type="button"
          className="cadastrar-button"
          onClick={handleCadastro}
        >
          Cadastrar
        </button>
      </ModalContainer>
    </ModalOverlay>
  );
}