"use client"
import React from 'react'
import RankingBox from '../components/RankingBox'
import { RankingDiv } from '@/styles/styled'

export default function Ranking() {
  return (
	<RankingDiv>
		<RankingBox/>
		<h2>Como funciona: </h2>
		<ul className='ul_ranking'>
			<li><span>✧</span> Melhoria no consumo: Quanto mais você reduzir em comparação ao mês anterior, maior será sua pontuação.</li>
			<li><span>✧</span> Engajamento: Participe de quizzes e acumule pontos extras no ranking.</li>
		</ul>
	</RankingDiv>
  )
}
