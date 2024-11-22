import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CardPerfilStyle, FundoCardStyle } from "@/styles/styled";
import { RoundStyleColor, UserResumoType } from "@/types";
import { AuthContext } from "@/context";

// imagens
import folhaStatus from "@/assets/folha-status.png";
import userLogado from "@/assets/user.png";
import editar from "@/assets/editar.png";
import ranking from "@/assets/ranking.png";
import wattscoins from "@/assets/wattscoins.png";
import icon1 from "@/assets/icons-emblema/icon1.png";
import icon2 from "@/assets/icons-emblema/icon2.png";
import icon3 from "@/assets/icons-emblema/icon3.png";
import icon4 from "@/assets/icons-emblema/icon4.png";

export default function CardPerfilResumo({ BgRound }: RoundStyleColor) {
    const [userResumo, setUserResumo] = useState<UserResumoType>({
        nome: "",
        email: "",
        posicao: 0,
        quant_pontos: 0,
        status: "",
    });

    const { user } = useContext(AuthContext);

    // Verifique se BgRound está definido e se não, atribua um valor padrão
    const [bgRoundColor, setBgRoundColor] = useState<string>(BgRound || "#CFD426");

    useEffect(() => {
        const buscarDados = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/usuarioresource/exibirUsuarioResumo/${user?.id_usuario}`
                );
                if (response.ok) {
                    const data = await response.json();
                    setUserResumo(data);

                    // Agora, depois de atualizar o estado, verificamos o status
                    if (data.status === "vermelho") {
                        setBgRoundColor("#D42626");
                    } else if (data.status === "verde") {
                        setBgRoundColor("#49D426");
                    } else {
                        setBgRoundColor("#CFD426"); // Cor padrão
                    }

                    console.log("status:", data.status); // Agora vamos ver o status correto
                }
            } catch (error) {
                console.log("Erro ao carregar os usuários: " + error);
            }
        };

        if (user?.id_usuario) {
            buscarDados();
        }
    }, [user?.id_usuario]);

    return (
        <CardPerfilStyle BgRound={bgRoundColor}> {/* Passando a cor correta aqui */}
            <FundoCardStyle>
                <Link href="/perfil">
                    <Image src={editar} alt="icone de editar perfil" className="editar" />
                </Link>
            </FundoCardStyle>

            <div className="sla">
                <div className="foto">
                    <Image src={userLogado} alt="Foto do perfil" className="foto-perfil" />
                    <div className="round">
                        <Image src={folhaStatus} alt="icone de folha" className="folha" />
                    </div>
                </div>
                <div className="infos-user">
                    <h2>{userResumo.nome}</h2>
                    <p>{userResumo.email}</p>
                </div>
                <div className="infos-user2">
                    <div>
                        <Image src={ranking} alt="icone do ranking" />
                        <p>
                            <span>{userResumo.posicao} lugar </span>ranking
                        </p>
                    </div>
                    <div>
                        <Image src={wattscoins} alt="icone dos wattscoins" />
                        <p>
                            <span>{userResumo.quant_pontos}</span> WattsCoins
                        </p>
                    </div>
                </div>
                <div className="infos-emblemas">
                    <p>Seus emblemas</p>
                    <div className="icones">
                        <Image src={icon1} alt="icone emblema" />
                        <Image src={icon2} alt="icone emblema" />
                        <Image src={icon3} alt="icone emblema" />
                        <Image src={icon4} alt="icone emblema" />
                    </div>
                </div>
            </div>
        </CardPerfilStyle>
    );
}
