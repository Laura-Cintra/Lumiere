import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApiResponse, ChartData } from "@/types";
// import { ApexOptions } from "apexcharts";

// Importa o ApexCharts dinamicamente (necessário para Next.js)
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

  // Busca os dados da API
  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/consumoresource/buscarConsumoKwhData/${userId}`
        );
        const data: ApiResponse[] = await response.json();

        const months = data.map((item) => item.mesAno); // Extrai os meses
        const consumptions = data.map((item) => item.consumoKwh); // Extrai os consumos

        // Atualiza os dados do gráfico
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
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h2>Consumo de KW/h por Mês</h2>
      {chartData.series.length > 0 && (
        <Chart
          options={chartData.options} // Corrigido para ApexOptions
          series={chartData.series} // Série de dados
          type="area" // Tipo do gráfico
          height={350}
        />
      )}
    </div>
  );
};

export default ConsumptionChart;
