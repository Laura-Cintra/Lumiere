import Image from "next/image";
import { RankingCardProps } from "@/types";
import { RankingCardContainer } from "@/styles/styled";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function RankingCard ({ posicao, nome, foto, medalha, pontos, height, premio }: RankingCardProps){
    return (
      <RankingCardContainer height={height} posicao={posicao}>
        <div>
          <h5>{nome}</h5>
          <div>
            <Image
              className="user-image"
              src={foto}
              alt={nome}
              width={100}
              height={100}
            />
            <div>
              <Image
                src={medalha}
                alt="Medalha"
                width={50}
                height={50}
              />
            </div>
          </div>
          <p className="points"><span>{pontos}</span> Pontos</p>
        </div>
  
        <div className="ranking-box">
          <div className="rank-text">{posicao === 1 ? "1° lugar" : posicao === 2 ? "2° lugar" : "3° lugar"}</div>
          <div className="prize-text">
          <HiOutlineSparkles/>
          {premio}
          </div>
        </div>
      </RankingCardContainer>
    )};