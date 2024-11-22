import { StaticImageData } from "next/image";

export type ConteudoProps = {
    id: number;
    imagem: string | StaticImageData;
    titulo: string;
    categoria: 'quiz' | 'dicas';
    descricao?: string;
    dica?: string;
    onClick?: () => void;
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
    months: { name: string; value: string }[];
    onClose: () => void;
};

export type CadastroProps = {
    cep: string,
    data_nascimento: string,
    email: string,
    nick_name: string,
    nome: string,
    senha: string,
}

export type UsuarioProps = {
    cep: string,
    data_nascimento: string,
    data_registro: string,
    email: string,
    id_usuario: number,
    nick_name: string,
    nome: string,
    porc_atual: number,
    quant_pontos: number,
    senha: string,
}

export type FotoProps = {
    foto: string
}

export type LoginProps = {
    email: string;
    senha: string;
}


export type RoundStyleColor = {
    BgRound?: string; // Prop opcional para a cor do circulo
}


export type ModalProps = {
    open: boolean;
    onClose: () => void;
    onAction?: () => void;
    children: React.ReactNode;
}

export type RankingProps = {
    nick_name: string;
    foto: string | StaticImageData; 
    pontuacao: number;
    porc_consumo: number;
}
  

// Tipos para a resposta da API
export type ApiResponse = {
    mesAno: string; // Exemplo: "01/2024"
    consumoKwh: number; // Exemplo: 150
  };
  
  // Tipos para o estado do gráfico
  import { ApexOptions } from "apexcharts"; // Importa os tipos corretos de ApexOptions
  
  export interface ChartData {
    series: { name: string; data: number[] }[]; // Dados das séries do gráfico
    options: ApexOptions; // Usa o tipo ApexOptions diretamente
  }

