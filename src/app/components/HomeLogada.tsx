import { useContext, useState } from "react";
import ModalMensagem from "./ModalMensagem";
import { AuthContext } from "@/context";
import ConsumptionChart from "./ConsumptionChart";
import { DashboardStyle } from "@/styles/styled";

export default function HomeDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { user } = useContext(AuthContext);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  function pegarPrimeiroNome(): string {
    if (user?.nome) {
      const nomes = user.nome.split(" "); // Divide o nome completo em partes
      return nomes[0]; // Retorna o primeiro nome
    }
    return ''; // Caso o nome não exista ou esteja vazio, retorna uma string vazia
  }

  return (
    <div>
      <DashboardStyle>
        <h1>{pegarPrimeiroNome()}, seu Dashboard:</h1>
        {user?.id_usuario && <ConsumptionChart userId={user.id_usuario} />}
      </DashboardStyle>

      {isModalOpen && (
        <ModalMensagem
          months={[{ name: "", value: "" }]}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}