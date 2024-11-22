"use client"

import { useContext, useState } from "react";
import Image from "next/image";
import { CategoriaButton, CategoriaContainer, ContainerCard, ContainerDestaqueGame, ContainerTituloGame, SubTituloStyle, TituloStyle } from "@/styles/styled";
import ModalQuiz from "../components/ModalQuiz"; // Novo componente
import CardGame from "../components/CardGame";
import CardDica from "../components/CardDica";
import { ConteudoProps } from "@/types";

//imagens
import game from "@/assets/game.png";
import btn from "@/assets/btn-seta.png";
import destaque from "@/assets/games/img-destaque.png";
import raio from "@/assets/games/raio.png";

//conteudos imgs
import quiz1 from "@/assets/games/quiz1.png";
import quiz2 from "@/assets/games/quiz2.png";
import quiz3 from "@/assets/games/quiz3.png";

import dica1 from "@/assets/games/dicas/dica1.png";
import dica2 from "@/assets/games/dicas/dica2.png";
import dica3 from "@/assets/games/dicas/dica3.png";
import { AuthContext } from "@/context";

const conteudos: ConteudoProps[] = [
    { id: 1, imagem: quiz1, titulo: "Quanto você conhece sobre o impacto da sua energia?", categoria: "quiz" },
    { id: 2, imagem: quiz2, titulo: "Sua casa é sustentável?", categoria: "quiz" },
    { id: 3, imagem: quiz3, titulo: "Você é um defensor da energia verde?", categoria: "quiz" },
    { id: 4, imagem: dica1, titulo: "Reduzir o tempo do banho", categoria: "dicas", descricao: "Diminuir 5 minutos no tempo do banho", dica: "economize até R$11,65 por mês e 13,71 kWh de energia!" },
    { id: 5, imagem: dica2, titulo: "Usar lâmpadas LED", categoria: "dicas", descricao: "Substituir lâmpadas incandescentes.", dica: "corte até 80% do consumo de iluminação da sua casa." },
    { id: 6, imagem: dica3, titulo: "Evitar o modo standby", categoria: "dicas", descricao: "Desligar aparelhos em standby", dica: "elimine até 12% da sua conta de luz mensal." },
];

export default function Games() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
    const [quizId, setQuizId] = useState<number | null>(null); // Gerencia o quiz selecionado
    const [showModal, setShowModal] = useState(false); // Gerencia o estado do modal
    const { user } = useContext(AuthContext);

    const handleOpenQuiz = async (id: number) => {
        const id_usuario = user?.id_usuario;

        if(user?.nome == ""){
            alert("Você deve primeiro fazer login")
            return
        }
        
         try {
            // Faz a verificação se o usuário já fez o quiz
            const response = await fetch(`http://localhost:8080/quizresource/usuarioFezQuiz/${id_usuario}/${id}`);
            
            if(response.ok){
                setQuizId(id);
                setShowModal(true);
            }else{
                alert("Você já fez este quiz.");
                return;
            }
           
        } catch (error) {
            console.error("Erro ao verificar quiz:", error);
            alert("Ocorreu um erro ao verificar o quiz.");
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);    
        setQuizId(null);
    };

    const conteudosFiltrados = categoriaSelecionada
        ? conteudos.filter((conteudo) => conteudo.categoria === categoriaSelecionada)
        : conteudos;

    return (
        <main>
            <ContainerTituloGame>
                <Image src={game} alt="icone de video game" />
                <TituloStyle> Games </TituloStyle>
                <Image src={game} alt="icone de video game" />
            </ContainerTituloGame>

            <ContainerDestaqueGame>
                <Image src={raio} alt="icone de raio" />
                <div className="conteudo-games">
                    <div className="explicacao-itens">
                        <p>Aqui na Lumière você ganha pontos por atos sustentáveis. Além de aprender a ser mais consciente e melhorar o consumo na sua casa, você também pode ganhar pontos! </p>
                        <Image src={btn} alt="seta para ir ao conteúdo" className="btn" onClick={() => {
                            const element = document.getElementById('destino');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <Image src={destaque} alt="imagem de destaque, postes e energia" className="img-destaque" />
                </div>
                <div className="raio-bottom">
                    <Image src={raio} alt="icone de raio" />
                </div>
            </ContainerDestaqueGame>

            <SubTituloStyle id="destino"> Conteúdos </SubTituloStyle>

            <CategoriaContainer>
                <CategoriaButton isSelected={categoriaSelecionada === 'quiz'} onClick={() => setCategoriaSelecionada('quiz')}>Quizzes</CategoriaButton>
                <CategoriaButton isSelected={categoriaSelecionada === 'dicas'} onClick={() => setCategoriaSelecionada('dicas')}>Dicas</CategoriaButton>
                <CategoriaButton isSelected={categoriaSelecionada === null} onClick={() => setCategoriaSelecionada(null)}>Todos</CategoriaButton>
            </CategoriaContainer>

            <ContainerCard>
                {
                    conteudosFiltrados.map((conteudo, indice) => {
                        if (conteudo.categoria === "dicas") {
                            return <CardDica key={indice} {...conteudo} />
                        } else {
                            return <CardGame key={indice} {...conteudo} onClick={() => handleOpenQuiz(conteudo.id)} />
                        }
                    })
                }
            </ContainerCard>

            {/* Modal do quiz */}
            {showModal && quizId && (
                <ModalQuiz quizId={quizId} onClose={handleCloseModal} />
            )}
        </main>
    );
}
