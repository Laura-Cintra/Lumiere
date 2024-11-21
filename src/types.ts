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
    month?: string;
    onClose: () => void;
};

export type UsuarioProps = {
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

export type ModalProps = {
    open: boolean;
    onClose: () => void;
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

