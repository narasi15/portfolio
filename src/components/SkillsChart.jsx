import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const SkillsChart = () => {
    useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "Proficiency",
          data: [5, 4, 4, 4, 4, 5, 4, 5], // Adjust skill levels here
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 4,
          columnWidth: "50%",
        },
      },
      xaxis: {
        categories: [
          "Python",
          "JavaScript / TypeScript",
          "React",
          "Node.js",
          "Kubernetes",
          "Tensorflow",
          "AWS",
          "GCP",
        ],
        labels: {
          style: {
            fontSize: "14px",
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        min: 1,
        max: 5,
        tickAmount: 4,
        labels: {
          formatter: function (val) {
            const levels = {
              1: "Just brewing ☕",
              2: "Warming up 🔥",
              3: "Getting good 😎",
              4: "Crushing it 💪",
              5: "Mastermind 🧠",
            };
            return levels[val] || val;
          },
          style: {
            fontSize: "14px",
          },
        },
      },
      grid: {
        borderColor: "#ddd",
        strokeDashArray: 4,
      },
      colors: ["#6f4e37"], // coffee brown :)
    };

    const chart = new ApexCharts(
      document.querySelector("#skills-chart"),
      chartConfig
    );
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="relative flex flex-col p-4 rounded-xl bg-white shadow-md">
      {/*<h2 className="text-xl font-bold mb-4">My Skills ☕</h2>*/}
      <div id="skills-chart"></div>
    </div>
  );
};

export default SkillsChart;