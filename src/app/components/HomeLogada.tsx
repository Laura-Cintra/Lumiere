import React, { useContext, useState, useEffect } from "react";
import ModalMensagem from "./ModalMensagem";
import { AuthContext } from "@/context";
import ConsumptionChart from "./ConsumptionChart";
import { DashboardStyle } from "@/styles/styled";

export default function HomeDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [consumptionChecked, setConsumptionChecked] = useState(false);
  const { user } = useContext(AuthContext);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function pegarPrimeiroNome(): string {
    if (user?.nome) {
      const nomes = user.nome.split(" ");
      return nomes[0];
    }
    return "";
  }

  const getCurrentMonth = () => {
    const now = new Date();
    const monthValue = now.toISOString().slice(0, 7);
    return { name: now.toLocaleString("default", { month: "long" }), value: monthValue };
  };

  useEffect(() => {
    if (!user?.id_usuario || consumptionChecked) return;

    const fetchConsumptionStatus = async () => {
      try {
        const currentMonth = "2024-09";
        const response = await fetch(
          `http://localhost:8080/consumoresource/verificarRegistro/${user.id_usuario}/${currentMonth}`
        );

        if (response.ok) {
          const { exists } = await response.json();
          setIsModalOpen(!exists);
        } else {
          console.error("Erro ao verificar o registro de consumo.");
        }
      } catch (error) {
        console.error("Erro ao fazer requisição:", error);
      } finally {
        setConsumptionChecked(true);
      }
    };

    fetchConsumptionStatus();
  }, [user, consumptionChecked]);

  return (
    <div>
      <DashboardStyle>
        <h1>{pegarPrimeiroNome()}, seu Dashboard:</h1>
        {user?.id_usuario && (
          <ConsumptionChart key={user.id_usuario} userId={user.id_usuario} />
        )}
      </DashboardStyle>

      {isModalOpen && (
        <ModalMensagem
          months={[getCurrentMonth()]}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
