import { StaticImageData } from "next/image";

export type ConteudoProps = {
    id: number;
    imagem: string | StaticImageData;
    titulo: string;
    categoria: 'quiz' | 'dicas';
    descricao?: string;
    dica?: string;
};

export type RankingCardProps = {
    posicao: number;
    nome: string;
    foto: StaticImageData | string;
    medalha: StaticImageData | string;
    pontos: number;
    height: string;
    premio: string;
};

export type ModalConsumoProps = {
    months: string[];
    onClose: () => void;
};

export type CadastroProps = {
    email: string;
    senha: string;
    nick_name: string;
    data_nascimento: string;
    cep: string;
    nome: string;
}

export type LoginProps = {
    email: string;
    senha: string;
}

export type RoundStyleColor = {
    BgRound?: string; // Prop opcional para a cor do circulo
}