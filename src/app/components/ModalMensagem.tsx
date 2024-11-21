import { ModalConsumoProps } from "@/types";

export default function ModalMensagem({ months, onClose }: ModalConsumoProps){

    return(
        <div>
            <h1>Cadastrando o consumo do mês de <span>{months}</span></h1>
            <button onClick={onClose}>×</button>
        </div>
    )
}