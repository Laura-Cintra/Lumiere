"use client"

import { DadosUserStyle } from "@/styles/styled"
import Image from "next/image"
import { IoCameraOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

//imagens
import user from "@/assets/user.png"


export default function DadosUser(){
    return(
        <DadosUserStyle>
            <FaRegTrashAlt className="icon-deletar" title="Excluir a conta"/>
            <div className="upload">
                <Image src={user} alt="Foto do perfil" />
                <div className="round">
                    <input type="file"/>
                    <IoCameraOutline />
                </div>
            </div>
            <div className="informacoes">
                <h2>Fulano da Silva</h2>
                <p>fulaninho123</p>
            </div>
            <div className="informacoes-extras">
                <p>110 WattsCoins</p>
                <p>20% de consumo</p>
                <p>Desde 12/01/2023</p>
            </div>
        </DadosUserStyle>
    )
}