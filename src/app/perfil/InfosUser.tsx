"use client";

import { AuthContext } from "@/context";
import { PerfilInfosStyle } from "@/styles/styled";
import { UsuarioProps } from "@/types";
import { useContext, useEffect, useState } from "react";

export default function InfosUser() {
    const { user } = useContext(AuthContext);

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
    const [novosDados, setNovosDados] = useState({
        nome: usuario.nome,
        nick_name: usuario.nick_name,
        senha: usuario.senha,
        cep: usuario.cep,
        data_nascimento: usuario.data_nascimento,
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNovosDados({ ...novosDados, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const cabecalho = {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(novosDados),
        };

        try {
            const response = await fetch(`http://localhost:8080/usuarioresource/atualizaDados/${user?.email}`, cabecalho);

            if (response.ok){
                alert("Atualização realizada com sucesso!")
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                console.log("Email: " + user?.email);
                const response = await fetch(`http://localhost:8080/usuarioresource/exibirUsuarioCompleto/${user?.email}`);

                const data = await response.json();
                setUsuario(data);
                console.log(usuario);
                setNovosDados(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsuario();
    }, []);

    return (
        <div>
            <PerfilInfosStyle>
                <div className="itens-menu">
                    <button className="itens-button">Seus dados</button>
                    <button className="itens-button">
                        Dados dos seus consumos
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="campos">
                        <label htmlFor="idemail">E-mail: </label>
                        <input
                            type="email"
                            name="email"
                            id="idemail"
                            value={usuario.email}
                            className="selectStyle"
                            readOnly
                        />
                    </div>
                    <div className="campos">
                        <label htmlFor="idsenha">Senha </label>
                        <input
                            type="password"
                            name="senha"
                            id="idsenha"
                            className="selectStyle"
                            value={novosDados.senha}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campos">
                        <label htmlFor="idnick">NickName: </label>
                        <input
                            type="text"
                            name="nick_name"
                            id="idnick"
                            className="selectStyle"
                            value={novosDados.nick_name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="campos">
                        <label htmlFor="iddate">Data de Nascimento: </label>
                        <input
                            type="date"
                            name="data_nascimento"
                            id="iddate"
                            className="selectStyle"
                            value={novosDados.data_nascimento}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="campos">
                        <label htmlFor="idcep">CEP: </label>
                        <input
                            type="text"
                            name="cep"
                            id="idcep"
                            className="selectStyle"
                            value={novosDados.cep}
                            onChange={handleChangeInput}
                        />
                    </div>

                    <div className="campos">
                        <label htmlFor="idnome">Nome Completo: </label>
                        <input
                            type="text"
                            name="nome"
                            id="idnome"
                            className="selectStyle"
                            value={novosDados.nome}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <input type="submit" value="Atualizar" className="btn" />
                </form>
            </PerfilInfosStyle>
        </div>
    );
}
