import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart(props) {
  const info = props.dataLabel;

  return (
    <div>
      <Line
        data={{
          labels: [
            "07:00 - 08:00", //0
            "08:00 - 09:00", //1
            "09:00 - 10:00", //2
            "10:00 - 11:00", //3
            "11:00 - 12:00", //4
            "12:00 - 13:00", //5
            "13:00 - 14:00", //6
            "14:00 - 15:00", //7
            "15:00 - 16:00", //8
            "16:00 - 17:00", //9
            "17:00 - 18:00", //10
          ],
          datasets: [
            {
              label: "Total Trash collected during the Day",
              data: info,
              backgroundColor: "orange",
              borderColor: "red",
              borderWidth: 1,
              fill: true,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0.5,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;
