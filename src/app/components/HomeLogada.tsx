import { useState } from "react";
import ModalMensagem from "./ModalMensagem";

export default function HomeDashboard() {

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <p>Home não logada!</p>

            {isModalOpen && (
                <ModalMensagem
                    months={["setembro", "outubro", "novembro"]} // Meses
                    onClose={handleCloseModal} // Função para fechar o modal
                />
            )}
        </div>
    );
}