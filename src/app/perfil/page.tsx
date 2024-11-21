"use client"

import { FundoStyle, PerfilContainerStyle, PerfilStyle } from "@/styles/styled";
import InfosUser from "./InfosUser";
import DadosUser from "./DadosUser";
import { MdLogout } from "react-icons/md";

export default function Perfil(){
    return(
        <PerfilContainerStyle>
            <FundoStyle>
                <div className="card-btn-sair">
                    <MdLogout className="btn-sair"/>
                </div>
            </FundoStyle>
            <PerfilStyle>
                <DadosUser/>
                <InfosUser/>
            </PerfilStyle>
        </PerfilContainerStyle>
    )
}