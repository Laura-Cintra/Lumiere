"use client"
import React, { useState } from 'react'
import '@/styles/global-styled'
import perfil_logo from '@/assets/login/icone_login.png'
import btn_seta from '@/assets/login/btn_right.png'
import logo_certa from '@/assets/logo_certa.png'
import { DivCadastro, DivCadastroDir, DivCadastroEsq } from '@/styles/styled'
import Image from 'next/image'
import { CadastroProps } from '@/types'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


export default function Cadastro() {

	const navigate = useRouter()

	const [error, setError] = useState<string | null>(null)

	const [cadastro, setCadastro] = useState<CadastroProps>(
		{
			email: '',
			senha: '',
			nick_name: '',
			data_nascimento: '',
			cep: '',
			nome: '',
		}
	)
	
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target
		setCadastro({...cadastro, [name]:value})
	}

	const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
		e.preventDefault()

		const cabecalho = {
			method: 'POST',
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(cadastro),
		}


		try{
			console.log(cabecalho.body)
			const response = await fetch("http://localhost:8080/usuarioresource/cadastroUsuario", cabecalho)
			if (response.ok){
				alert("Cadastro realizado com sucesso!")
				navigate.push("/login")
			}else{
				const errorData = await response.json()
				setError(errorData.message || "Ocorreu um erro ao realizar o cadastro!")
		   	}
		} catch(error){
			console.error("Erro ao realizar cadastro", error);
			setError("Erro ao conectar com o servidor.");
	   	}
	} 



	return (
	<DivCadastro>
		
		<DivCadastroEsq>
			<div className='logo'>
				<Link href={"/"}>
					<Image src={logo_certa} alt='Logo Lumiere'/>
				</Link>
			</div>
			<Image src={perfil_logo} alt='Ícone de uma mulher em estilo cartoon' className='image'/>
			<h2>Cadastre-se</h2>
			<p>Junte-se à Lumière, economize energia e ganhe recompensas por um futuro sustentável!</p>
			<Image src={btn_seta} alt='Botão de um círculo com uma seta para direita'/>
		</DivCadastroEsq>
		<DivCadastroDir>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="idEmail">E-mail:</label>
					<input type="email" name="email" id="idEmail" placeholder='exemplo@domain.com' onChange={handleChangeInput}/>
				</div>
				<div>
					<label htmlFor="idsenha">Senha:</label>
					<input type="password" name="senha" id="idSenha" placeholder='Máximo 10 caracteres' onChange={handleChangeInput}/>
				</div>
				<div>
					<label htmlFor="idNick">NickName:</label>
					<input type="text" name="nick_name" id="idNick" placeholder='Digite um nickname' onChange={handleChangeInput}/>
				</div>
				<div>
					<label htmlFor="idNasc">Data Nascimento:</label>
					<input type="date" name="data_nascimento" id="idNasc" placeholder='xx/xx/xxxx' onChange={handleChangeInput}/>
				</div>
				<div>
					<label htmlFor="idCep">CEP:</label>
					<input type="text" name="cep" id="idCep" placeholder='12345-678' onChange={handleChangeInput}/>
				</div>
				<div>
					<label htmlFor="idNome">Nome Completo:</label>
					<input type="text" name="nome" id="idNome" placeholder='Fulano da Silva' onChange={handleChangeInput}/>
				</div>

				<div>
					<input type="checkbox" name="aceitarTermos" id="idTermos" />
					<label htmlFor="idTermos">Eu li, e aceito os termos de uso</label>
				</div>

				<button type='submit'>
					Cadastrar
				</button>
			</form>
		</DivCadastroDir>
	</DivCadastro>
  )
}
