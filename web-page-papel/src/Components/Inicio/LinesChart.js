import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

export default function LinesChart(props) {
    const { data } = props;

    const midata = {
        labels: data.rows,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Porcentaje',
                data: data.columns,
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            }
        ],
    };

    return <Line data={midata} options={misoptions}/>
}