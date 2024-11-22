"use client"

import { FundoStyle, PerfilContainerStyle, PerfilStyle } from "@/styles/styled";
import InfosUser from "./InfosUser";
import DadosUser from "./DadosUser";
import { MdLogout } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "@/context";
import { useRouter } from "next/navigation";

export default function Perfil(){

    const { logout } = useContext(AuthContext);
    const navigate = useRouter()

    const handleLogout = () => {
        logout()
        alert("Saindo da conta...")
        navigate.refresh()
        navigate.push("/")
    }

    return(
        <PerfilContainerStyle>
            <FundoStyle>
                <div className="card-btn-sair" >
                    <MdLogout className="btn-sair" onClick={handleLogout}/>
                </div>
            </FundoStyle>
            <PerfilStyle>
                <DadosUser/>
                <InfosUser/>
            </PerfilStyle>
        </PerfilContainerStyle>
    )
}