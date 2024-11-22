"use client"

import { DadosUserStyle } from "@/styles/styled"
import Image from "next/image"
import { IoCameraOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

//imagens
import user_foto from "@/assets/user.png"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context";
import { FotoProps, UsuarioProps } from "@/types";
import Modal from "./Modal";


export default function DadosUser(){
    const {user} = useContext(AuthContext)
    const [foto, setFoto] = useState<FotoProps>({
        "foto" : user_foto.src
    });
    const [usuario, setUsuario] = useState<UsuarioProps>({
        cep: "",
        data_nascimento: "",
        data_registro: "",
        email: "",
        id_usuario: 0,
        nick_name: "",
        nome: "",
        porc_atual: 0,
        quant_pontos: 0,
        senha: "",
    });
    const dataString = usuario.data_registro
    const dataRegistro = new Date(dataString)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDeleteAccount = async () => {
        try{
            const cabecalho = {
                method : 'DELETE',
            }

            const response = await fetch(`http://localhost:8080/usuarioresource/deletarUsuario/${user?.id_usuario}`, cabecalho)
            if (response.ok) {
                alert("Conta excluída!")
                console.log("Conta excluída!");
            }else {
                alert("Falha ao excluir a conta")
                console.log(response.statusText)
            }
            
        }catch (error){
            console.log("Error: " + error)
        }
        closeModal();
    };

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                console.log("Email: " + user?.email);
                const response = await fetch(`http://localhost:8080/usuarioresource/exibirUsuarioCompleto/${user?.email}`);
                if (response.ok){
                    const data = await response.json();
                    setUsuario(data);
                    console.log("Informações buscadas da base com sucesso!")
                    const response2 = await fetch(`http://localhost:8080/usuarioresource/exibirFoto/${usuario.email}`) 
                    if (response2.ok) {
                        const data2 = await response2.json()
                        if (data2){
                            setFoto(data2)    
                        }
                        console.log("Foto buscada na base com sucesso!")
                    }else {
                        console.log("Falha ao buscar foto na base!")
                    }
                    
                }else {
                    console.log("Falha ao buscar informações do usuário na base!")
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsuario();
    }, []);
    
    return(
        <DadosUserStyle>
            <button type="submit" onClick={openModal}><FaRegTrashAlt className="icon-deletar" title="Excluir a conta"/></button>
            <div className="upload">
                <Image src={foto.foto ? foto.foto : user_foto} alt="Foto do perfil" width={20} height={20}/>
                <div className="round">
                    <input type="file"/>
                    <IoCameraOutline />
                </div>
            </div>
            <div className="informacoes">
                <h2>{usuario.nome}</h2>
                <p>{usuario.nick_name}</p>
            </div>
            <div className="informacoes-extras">
                <p>{usuario.quant_pontos} WattsCoins</p>
                <p>{usuario.porc_atual}% de consumo</p>
                <p>Desde {dataRegistro.toLocaleDateString()}</p>
            </div>

            <Modal open={isModalOpen} onClose={closeModal} onAction={handleDeleteAccount}>
                <h2>Confirmar exclusão?</h2>
                <p>Excluir conta: {usuario.nick_name}</p>
                <p>Esta ação não pode ser desfeita.</p>
            </Modal>
        </DadosUserStyle>
        
    )
}