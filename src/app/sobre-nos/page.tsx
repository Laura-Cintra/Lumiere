"use client"

import { ParticipantesStyle, SobreStyle } from "@/styles/styled";
import Image from "next/image";

// imagens
import lampada from "@/assets/sobre-nos/lampada_sustentavel.png"
import grafico from "@/assets/sobre-nos/icone_grafico.png"
import premio from "@/assets/sobre-nos/premio_sustentavel.png"
import laura from "@/assets/sobre-nos/laura.png"
import maria from "@/assets/sobre-nos/maria.png"
import vini from "@/assets/sobre-nos/vinicius.png"
import git from "@/assets/sobre-nos/icon-git.png"
import linkedin from "@/assets/sobre-nos/icon-linkedin.png"
import Link from "next/link";

export default function SobreNos(){
    return (
        <SobreStyle>
            <section>
                <h1>Sobre nós</h1>
                <p className="introducao">Nossa missão é simples, mas poderosa: queremos inspirar e capacitar as pessoas a adotarem hábitos de consumo energético mais conscientes e sustentáveis, promovendo uma relação equilibrada com os recursos naturais. Acreditamos que, com pequenas mudanças, cada um pode contribuir para um futuro mais verde, sustentável e com energia limpa.
                Para isso, criamos uma plataforma interativa e divertida que combina gamificação e educação ambiental. Aqui, você encontra ferramentas e atividades que transformam o aprendizado sobre consumo consciente em uma experiência envolvente. Queremos que você seja o protagonista da mudança, aproveitando nossas funcionalidades para compreender melhor seu impacto energético e ambiental.</p>
            </section>
            <section>
                <h2>Nossos compromissos</h2>
                <div className="container-compromissos">
                    <div>
                        <Image src={lampada} alt="ícone lâmpada com uma folha"/>
                        <p>Nosso projeto incentiva o consumo de energia eficiente, beneficiando o planeta e o bolso.</p>
                    </div>
                    <div>
                        <Image src={grafico} alt="gráfico de eficiência sustentável"/>
                        <p>Promovemos transparência para decisões sustentáveis, ajudando a economizar e preservar recursos.</p>
                    </div>
                    <div>
                        <Image src={premio} alt="ícone prêmio com uma folha"/>
                        <p>Incentivamos hábitos sustentáveis com gamificação e redução do consumo de energia.</p>
                    </div>
                </div>
            </section>
            <section className="section_participantes">
                <h2>Equipe da Lumière</h2>
                <ParticipantesStyle className="participantes">
                    <div id="part1">
                        <Image src={laura} alt="foto da participante Laura" className="foto"/>
                    <div className="container"> 
                        <div className="infos">
                            <h3>Laura Cintra</h3>
                            <p>RM: 558843 | 1TDSPK</p>
                        </div>
                        <div className="icons">
                            <Link href="https://github.com/Laura-Cintra" target="_blank"><Image src={git} alt="botão do github"/></Link>
                            <Link href="https://www.linkedin.com/in/laura-cintra-530742213/" target="_blank"><Image src={linkedin} alt="botão do linkedin"/></Link>
                        </div>
                    </div>
                        </div>
                        <div id="part2">
                            <Image src={maria} alt="foto da participante Maria" className="foto"/>
                            <div className="container"> 
                                <div className="infos">
                                    <h3>Maria Paixão</h3>
                                    <p>RM 558832 | 1TDSPK </p>
                                </div>
                                <div className="icons">
                                    <Link href="https://github.com/MariaEdPaixao" target="_blank"><Image src={git} alt="botão do github"/></Link>
                                    <Link href="https://www.linkedin.com/in/maria-eduarda-alves-da-paixão-6267a1303/" target="_blank"><Image src={linkedin} alt="botão do linkedin"/></Link>
                                </div>
                            </div>
                        </div>
                        <div id="part3">
                            <Image src={vini} alt="foto do participante Vinícius" className="foto"/>
                            <div className="container"> 
                                <div className="infos">
                                    <h3>Vinícius Saes</h3>
                                    <p>RM: 554456 | 1TDSPK</p>
                                </div>
                                <div className="icons">
                                    <Link href="https://github.com/ViniciuSaeSouza" target="_blank"><Image src={git} alt="botão do github"/></Link>
                                    <Link href="https://www.linkedin.com/in/vinicius-saes/" target="_blank"><Image src={linkedin} alt="botão do linkedin"/></Link>
                                </div>
                            </div>
                        </div>
                </ParticipantesStyle>
            </section>
        </SobreStyle>
    )
}