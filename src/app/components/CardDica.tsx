
import { CardDicaStyle } from "@/styles/styled";
import { ConteudoProps } from "@/types";
import Image from "next/image";

export default function CardDica({id, imagem, titulo, categoria, descricao, dica}:ConteudoProps){
    return(
        <CardDicaStyle key={id}>
            <Image src={imagem} alt="imagem destaque do quiz"/>
            <div className="conjunto-dica">
                <div className="categoria"><p>{categoria}</p></div>
                <h2>{titulo}</h2>
                <p className="txt-destaque">{descricao}</p>
                <p className="txt-surpresa">{dica}</p>
            </div>
        </CardDicaStyle>
    )
}