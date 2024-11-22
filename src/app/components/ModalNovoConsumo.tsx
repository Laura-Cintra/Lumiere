import conta from "@/assets/conta.png";
import { ModalContainer, ModalOverlay } from "@/styles/styled";
import { ModalConsumoProps } from "@/types";
import Image from "next/image";
import { useState } from "react";

export default function ModalConsumo({ months, onClose }: ModalConsumoProps) {
    const [consumoData, setConsumoData] = useState({
        kwh: "",
        valor: "",
        imagem: null as File | null,
    });

    const handleInputChange = (field: string, value: string | File | null) => {
        setConsumoData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <button className="close" onClick={onClose}>×</button>
                <div className="titulo">
                    <Image src={conta} alt="ícone fatura" width={50} height={50} />
                    <h2>
                        Cadastrando o consumo do mês de{" "}
                        <span>{months}</span>
                    </h2>
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
                        <label htmlFor="upload" className="custom-file-upload">Procurar</label>
                        <input
                            type="file"
                            id="upload"
                            accept=".pdf"
                            onChange={(e) => handleInputChange("imagem", e.target.files?.[0] || null)}
                            key={consumoData.imagem ? consumoData.imagem?.name : "input-reset"}
                        />
                        {consumoData.imagem ? (
                            <p>{(consumoData.imagem as File).name}</p>
                        ) : (
                            <p>Nenhum arquivo selecionado.</p>
                        )}
                    </div>
                    <p>obs: essa imagem servirá apenas para autenticação. Depois ela será descartada.</p>
                </form>
                <button
                    type="button"
                    className="cadastrar-button"
                    onClick={() => {
                        onClose();
                    }}
                >
                    Cadastrar
                </button>
            </ModalContainer>
        </ModalOverlay>
    );
}