"use client";

import {
  AlternativesContainer,
  CloseButton,
  ModalContent,
  ModalOverlayQuiz,
} from "@/styles/styled";
import { useContext, useEffect, useState } from "react";
import trofeu from "@/assets/trofeu.png";
import Image from "next/image";
import { AuthContext } from "@/context";

type ModalQuizProps = {
  quizId: number;
  onClose: () => void;
  idUsuario: number;
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

export default function ModalQuiz({ quizId, onClose, idUsuario }: ModalQuizProps) {
  const { user, updatePontuacao } = useContext(AuthContext);
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [wattCoins, setWattsCoins] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (isFinished) {
      const pontosObtidos = acertos * 5;
      setWattsCoins(pontosObtidos);
      atualizarPontuacaoUsuario(pontosObtidos);
      handleRegister();
    }
  }, [isFinished, acertos]);

  useEffect(() => {
    const fetchPerguntas = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/quizresource/buscarPerguntas/${quizId}`
        );
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const data = await response.json();
        const perguntasFormatadas = data.map((item: ItemAPI) => ({
          id: item.id_pergunta,
          texto: item.pergunta,
          alternativas: Object.entries(JSON.parse(item.alternativas)).map(
            ([key, value]) => ({
              id: key,
              texto: value,
            })
          ),
          respostaCerta: item.resposta_certa,
        }));
        setPerguntas(perguntasFormatadas);
      } catch (error) {
        setErro("Erro ao carregar perguntas. Tente novamente mais tarde. " + error);
      } finally {
        setCarregando(false);
      }
    };

    fetchPerguntas();
  }, [quizId]);

  const atualizarPontuacaoUsuario = async (pontos: number) => {
    if (!user?.id_usuario) return;

    try {
      const novaPontuacao = (user.pontuacao || 0) + pontos;

      const response = await fetch(
        `http://localhost:8080/usuarioresource/atualizarPontuacao/${user.id_usuario}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ novaPontuacao }),
        }
      );

      const insere_rank = await fetch(
        `http://localhost:8080/rankingresource/inserirRanking`
      );

      if (response.ok || insere_rank.ok) {
        await updatePontuacao(); // Atualiza a pontuação no contexto
        alert(`Sua pontuação foi atualizada para ${novaPontuacao} WattsCoins!`);
      } else {
        console.error("Erro ao atualizar pontuação.");
      }
    } catch (error) {
      console.error("Erro ao atualizar pontuação:", error);
    }
  };

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
        id_usuario: idUsuario,
        id_quiz: quizId,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setTimeout(() => {
          onClose();
        }, 3000);
      })
      .catch((error) => console.error("Erro ao registrar resposta:", error));
  };

  return (
    <ModalOverlayQuiz open>
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
            <Image src={trofeu} alt="imagem de um troféu" />
            <p>Sua pontuação: {wattCoins} WattsCoins</p>
          </div>
        ) : (
          <div>
            <h3>
              Pergunta {indiceAtual + 1} de {perguntas.length}
            </h3>
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
    </ModalOverlayQuiz>
  );
}
