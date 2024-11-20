"use client"
import React from 'react'
import '@/styles/global-styled'
import perfil_logo from '@/assets/login/icone_login.png'
import btn_seta from '@/assets/login/btn_right.png'
import { DivLogin, DivLoginEsq } from '@/styles/styled'
import Image from 'next/image'

export default function Cadastro() {
  return (
	<DivLogin>
		<DivLoginEsq>
			<Image src={perfil_logo} alt='Ícone de uma mulher em estilo cartoon' className='image'/>
			<h2>Cadastre-se</h2>
			<p>Junte-se à Lumière, economize energia e ganhe recompensas por um futuro sustentável!</p>
			<button><Image src={btn_seta} alt='Botão de um círculo com uma seta para direita'/></button>
		</DivLoginEsq>
		<div>
		</div>
	</DivLogin>
  )
}
