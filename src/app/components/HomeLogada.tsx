import { useState } from "react";
import ModalMensagem from "./ModalMensagem";

export default function HomeDashboard(){
    
    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div>
            <p>Home não logada!</p>

            {isModalOpen && (
                <ModalMensagem
                month="dos últimos 3 meses" // Passe o mês como prop
                showCadastrar={true} // Exibe o botão "Cadastrar"
                onClose={handleCloseModal} // Função para fechar o modal
                />
            )}
        </div>
    );
}