import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApiResponse, ChartData } from "@/types";

// Importa o ApexCharts dinamicamente
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Props {
  userId: number;
}

const ConsumptionChart: React.FC<Props> = ({ userId }) => {
  const [chartData, setChartData] = useState<ChartData>({
    series: [], // Inicialmente vazio
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      xaxis: {
        categories: [], // Inicialmente vazio
      },
      yaxis: {
        title: {
          text: "Consumo (KW/h)",
        },
      },
      colors: ["#008FFB", "#FEB019"], // Cores das linhas
      stroke: {
        curve: "smooth",
        width: 2,
      },
      tooltip: {
        theme: "dark",
      },
    },
  });

  useEffect(() => {
    if (!userId) return;

    let isMounted = true; // Flag para verificar se o componente está montado

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/consumoresource/buscarConsumoKwhData/${userId}`
        );
        const data: ApiResponse[] = await response.json();

        if (isMounted) {
          const months = data.map((item) => item.mesAno); // Extrai os meses
          const consumptions = data.map((item) => item.consumoKwh); // Extrai os consumos

          setChartData((prevData) => ({
            ...prevData,
            series: [
              {
                name: "Consumo Mensal",
                data: consumptions,
              },
            ],
            options: {
              ...prevData.options,
              xaxis: {
                categories: months,
              },
            },
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Limpa a flag ao desmontar
    };
  }, [userId]);

  return (
    <div>
      <h2>Consumo de KW/h por Mês</h2>
      {chartData.series.length > 0 && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      )}
    </div>
  );
};

export default ConsumptionChart;
