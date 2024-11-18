import { CardGameStyle } from "@/styles/styled";
import { ConteudoProps } from "@/types";
import Image from "next/image";

export default function CardGame({id, imagem, titulo, categoria}:ConteudoProps){
    return(
        <CardGameStyle key={id}>
            <Image src={imagem} alt="imagem destaque do quiz"/>
            <div className="categoria"><p>{categoria}</p></div>
            <h2>{titulo}</h2>
        </CardGameStyle>
    )
}