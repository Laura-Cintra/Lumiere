"use client";
import React, { useEffect, useState } from "react";
import med_ouro from "@/assets/ranking/medalha_ouro.png";
import med_prata from "@/assets/ranking/medalha_prata.png";
import med_bronze from "@/assets/ranking/medalha_bronze.png";
import med_verde from "@/assets/ranking/medalha_verde.png";
import pic_placeholder from "@/assets/ranking/profile_placeholder.png";
import Image from "next/image";
import { RankingProps } from "@/types";
import { RankingBoxDiv } from "@/styles/styled";
export default function RankingBox() {
    const medalhas = [med_ouro, med_prata, med_bronze, med_verde];

    const [rankeado, setRankeado] = useState({
        nick_name: "",
        foto: pic_placeholder.src,
        pontuacao: 0,
        porc_consumo: 0,
    });

    const [rankeados, setRankeados] = useState<RankingProps[]>([
        {
            nick_name: "",
            foto: pic_placeholder.src,
            pontuacao: 0,
            porc_consumo: 0,
        },
    ]);

    useEffect(() => {
        const fetchRankeados = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8080/rankingresource/exibirRanking"
                );

                if (response.ok) {
                    const dados = await response.json();
                    console.log(dados);
                    setRankeados(dados);
                } else {
                    alert(
                        "Falha ao recuperar os rankings. Erro: " + response.text
                    );
                }
            } catch (error) {
                alert("Falha ao consultar Rankings na API");
            }
        };
        fetchRankeados();
    }, []);

    return (
        <RankingBoxDiv>
            <h1>
                Ranking <span className="titulo_span">Sustentável</span>
            </h1>
			<ul  className="ranking_lista">
            {rankeados.map((rankeado, i) => (
                    <li key={i} className="ranking_linha">
                        <div>
                            <Image
                                className="medalha"
                                src={medalhas[i]}
                                alt="ícone de uma medalha olímpica"
                            />
                        </div>
                        <div className="pic_nome_pontos">
                            <Image
                                className="foto"
                                src={pic_placeholder}
                                alt="Imagem de perfil padrão em estilo cartoon"
                                width={50}
                                height={50}
                            />
                            <div className="nome_pontos">
                                <p>{rankeado.nick_name}</p>
                                <p>
                                    <span className="pontos_span">{rankeado.pontuacao}</span> pontos
                                </p>
                            </div>
                        </div>
                        <div className="porc_consumo">
                            <p>
                                <span className="consumo_span">{rankeado.porc_consumo}%</span> de consumo
                                consciente
                            </p>
                        </div>
                    </li>
            ))}
			</ul>
			<span className="underline_box "></span>
        </RankingBoxDiv>
    );
}