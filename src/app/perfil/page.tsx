"use client"

import { FundoStyle, PerfilStyle } from "@/styles/styled";
import InfosUser from "./InfosUser";
import DadosUser from "./DadosUser";
import { MdLogout } from "react-icons/md";

export default function Perfil(){
    return(
        <main>
            <FundoStyle>
                <div className="card-btn-sair">
                    <MdLogout className="btn-sair"/>
                </div>
            </FundoStyle>
            <PerfilStyle>
                <DadosUser/>
                <InfosUser/>
            </PerfilStyle>
        </main>
    )
}