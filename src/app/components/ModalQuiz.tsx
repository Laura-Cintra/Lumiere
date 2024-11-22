import { useEffect, useState } from "react";
import styled from "styled-components";

type ModalQuizProps = {
    quizId: number;
    onClose: () => void;
};

type Alternativa = {
    texto: string;
    id: string;
};

type Pergunta = {
    id: number;
    texto: string;
    alternativas: Alternativa[];
    respostaCerta: string;
};

type ItemAPI = {
    alternativas: string;
    id_pergunta: number;
    id_quiz: number;
    pergunta: string;
    resposta_certa: string;
};

export default function ModalQuiz({ quizId, onClose }: ModalQuizProps) {
    const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [acertos, setAcertos] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        const fetchPerguntas = async () => {
            try {
                const response = await fetch(`http://localhost:8080/quizresource/buscarPerguntas/${quizId}`);
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }
                const data = await response.json();
                const perguntasFormatadas = data.map((item: ItemAPI) => ({
                    id: item.id_pergunta,
                    texto: item.pergunta,
                    alternativas: Object.entries(JSON.parse(item.alternativas)).map(([key, value]) => ({
                        id: key,
                        texto: value,
                    })),
                    respostaCerta: item.resposta_certa,
                }));
                setPerguntas(perguntasFormatadas);
            } catch (error) {
                setErro("Erro ao carregar perguntas. Tente novamente mais tarde.");
            } finally {
                setCarregando(false);
            }
        };

        fetchPerguntas();
    }, [quizId]);

    const handleAnswer = (idAlternativa: string) => {
        if (idAlternativa === perguntas[indiceAtual].respostaCerta) {
            setAcertos((prev) => prev + 1);
        }
        if (indiceAtual < perguntas.length - 1) {
            setIndiceAtual((prev) => prev + 1);
        } else {
            setIsFinished(true);
        }
    };

    const handleRegister = () => {
        fetch("http://localhost:8080/quizresource/registrarResposta", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                quant_acertos: acertos,
                id_usuario: 1,
                id_quiz: quizId,
            }),
        })
            .then((res) => res.json())
            .then(() => onClose())
            .catch((error) => console.error("Erro ao registrar resposta:", error));
    };

    return (
        <ModalOverlay open>
            <ModalContent open>
                <CloseButton onClick={onClose}>X</CloseButton>
                {carregando ? (
                    <p>Carregando perguntas...</p>
                ) : erro ? (
                    <p>{erro}</p>
                ) : isFinished ? (
                    <div>
                        <h3>Quiz finalizado!</h3>
                        <p>
                            Você acertou {acertos} de {perguntas.length} perguntas.
                        </p>
                        <button onClick={handleRegister}>Registrar Resultado</button>
                    </div>
                ) : (
                    <div>
                        <h3>Pergunta {indiceAtual + 1} de {perguntas.length}</h3>
                        <p>{perguntas[indiceAtual].texto}</p>
                        <AlternativesContainer>
                            {perguntas[indiceAtual].alternativas.map((alternativa) => (
                                <button
                                    key={alternativa.id}
                                    onClick={() => handleAnswer(alternativa.id)}
                                >
                                    {alternativa.texto}
                                </button>
                            ))}
                        </AlternativesContainer>
                    </div>
                )}
            </ModalContent>
        </ModalOverlay>
    );
}

const ModalOverlay = styled.div<{ open: boolean }>`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ open }) => (open ? "rgba(0, 0, 0, 0.2)" : "transparent")};
    transition: background-color 0.3s ease;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

const ModalContent = styled.div<{ open: boolean }>`
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    transition: all 0.3s ease;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(1.25)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    width: 90%;
    max-width: 600px;
    height: 300px; // Tornando o modal maior
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.25rem;
    border-radius: 0.375rem;
    color: #9ca3af; 
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #f9fafb; 
        color: #4b5563; 
    }
`;

const AlternativesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    button {
        padding: 0.5rem 1rem;
        border: none;
        background-color: #007bff;
        color: white;
        border-radius: 0.375rem;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }
`;
