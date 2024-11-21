"use client"
import React, { useState } from 'react'
import { DivLogin } from '@/styles/styled'
import Image from 'next/image'
import logo from '@/assets/logo_certa.png'
import icone from '@/assets/login/icone_login.png'
import Link from 'next/link'
import { LoginProps } from '@/types'
import { useRouter } from 'next/navigation'
import Modal from './Modal'


export default function Login() {

	const navigate = useRouter()
	const [error, setError] = useState<string | null>(null)
	const [open, setOpen] = useState(false) // abrir e fechar o modal

	const [login, setLogin] = useState<LoginProps>({
		'email' : '',
		'senha' : '',
	})
	
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target
		setLogin({...login, [name]:value})
	}

	const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) =>{
		e.preventDefault()

		const cabecalho = {
			method: 'POST',
			headers: {"Content-Type" : "application/json"},
			body: JSON.stringify(login),
		}


		try{
			const response = await fetch("http://localhost:8080/usuarioresource/login", cabecalho)
			if (response.ok){
				setOpen(true)
				navigate.push("/")
			}else{
				const errorData = await response.json()
				alert("Falha ao realizar o Login! Verifique se o e-mail e senha estão corretos.")
		   	}
		} catch(error){
			console.error("Erro ao realizar cadastro", error);
			setError("Erro ao conectar com o servidor.");
	   	}
	} 
	

  return (
	
	<DivLogin>
		<div className='login-logo'>
			<Link href={"/"}>
				<Image className='login-logo' src={logo} alt='Logo Lumiere'/>
			</Link>
		</div>
		<div className='login_card'>
			<Image src={icone} alt='Icone de um desenho de uma mulher'/>
			<h2>Login</h2>
			<p>Seja bem vindo(a)!</p>
			<form onSubmit={handleSubmit}>
				<div>
					<input type="email" placeholder='E-mail' name='email' onChange={handleChangeInput}/>
				</div>
				<div>
					<input type="password" placeholder='Senha' name='senha' onChange={handleChangeInput}/>
				</div>
				<Link className='esqueceu_senha_link' href={"/"}>Esqueceu a Senha?</Link>	
				<button type="submit">Login</button>
				<Link className='cadastro_link' href={"/cadastro"}>Ainda não tem uma conta? Cadastre-se</Link>
			</form>
		</div>
		<Modal open={open} onClose={() => setOpen(false)}>
			<div className="text-center w-56">
				<h3 className="text-lg font-black text-gray-800">Excluir Produto?</h3>
			</div>
		</Modal>
	</DivLogin>
  )
}
