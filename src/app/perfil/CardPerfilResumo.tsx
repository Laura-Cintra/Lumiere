
import Image from "next/image"

import { CardPerfilStyle, FundoCardStyle } from "@/styles/styled"

//imagens
import folhaStatus from "@/assets/folha-status.png"
import user from "@/assets/user.png"
import editar from "@/assets/editar.png"
import ranking from "@/assets/ranking.png"
import wattscoins from "@/assets/wattscoins.png"
import icon1 from "@/assets/icons-emblema/icon1.png"
import icon2 from "@/assets/icons-emblema/icon2.png"
import icon3 from "@/assets/icons-emblema/icon3.png"
import icon4 from "@/assets/icons-emblema/icon4.png"
import Link from "next/link"
import { RoundStyleColor } from "@/types"


export default function CardPerfilResumo({BgRound}:RoundStyleColor){
    return(
        <CardPerfilStyle BgRound={BgRound}>
                <FundoCardStyle>
                    <Link href="/perfil"><Image src={editar} alt="icone de editar perfil" className="editar"/></Link>
                </FundoCardStyle>

                <div className="sla">
                    <div className="foto">
                        <Image src={user} alt="Foto do perfil" className="foto-perfil"/>
                        <div className="round">
                            <Image src={folhaStatus} alt="icone de folha" className="folha"/>
                    </div>
                </div>
                <div className="infos-user">
                    <h2>Fulano da silva</h2>
                    <p>fulanodasilva123@gmail.com</p>
                </div>
                <div className="infos-user2">
                    <div>
                        <Image src={ranking} alt="icone do ranking"/>
                        <p><span>4° lugar </span>ranking</p>
                    </div>
                    <div>
                        <Image src={wattscoins} alt="icone dos wattscoins"/>
                        <p><span>110</span> WattsCoins</p>
                    </div>
                </div>
                <div className="infos-emblemas">
                    <p>Seus emblemas</p>
                    <div className="icones">
                        <Image src={icon1} alt="icone emblema"/>
                        <Image src={icon2} alt="icone emblema"/>
                        <Image src={icon3} alt="icone emblema"/>
                        <Image src={icon4} alt="icone emblema"/>
                    </div>
                </div>
            </div>
        </CardPerfilStyle>
    )
}