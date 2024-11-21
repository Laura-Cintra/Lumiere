"use client"

import { PerfilInfosStyle } from "@/styles/styled"

export default function InfosUser(){
    return(
        <div>
            <PerfilInfosStyle>
                <div className="itens-menu">
                    <button className="itens-button">Seus dados</button>
                    <button className="itens-button">Dados dos seus consumos</button>
                </div>

                <form>
                    <div className="campos">
                        <label htmlFor="idemail">E-mail: </label>
                        <input type="email" name="email" id="idemail" value="fulanodasilva123@gmail.com" className="selectStyle" readOnly/>
                    </div>
                    <div className="campos">
                        <label htmlFor="idsenha">Senha </label>
                        <input type="password" name="senha" id="idsenha" className="selectStyle" value="fulaninho123"/>
                    </div>
                    <div className="campos">
                        <label htmlFor="idnick">NickName: </label>
                        <input type="text" name="nick_name" id="idnick" className="selectStyle" value="fulaninho123"/>
                    </div>
                    <div className="campos">
                            <label htmlFor="iddate">Data de Nascimento: </label>
                            <input type="date" name="data_nasc" id="iddate" className="selectStyle" />
                        </div>
                    <div className="infosC">
                        <div className="campos">
                            <label htmlFor="idcep">CEP: </label>
                            <input type="text" name="cep" id="idcep" className="selectStyle" value="12345-678"/>
                        </div>
                    </div>
                    <div className="campos">
                        <label htmlFor="idnome">Nome Completo: </label>
                        <input type="text" name="nome_completo" id="idnome" className="selectStyle" value="Fulano da Silva"/>
                    </div>
                    <input type="submit" value="Atualizar" className="btn"/>
                </form>

            </PerfilInfosStyle>
        </div>
    )
}