const ctx = document.getElementById("myChart");

const chart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Ihr Anteil", "Transaktionsgebühren"],
    //main color: 002a5b
    //accent color: 47b5f1
    datasets: [
      {
        label: "von 1000 Euro",
        data: [99.6, 0.4],
        backgroundColor: ["#20948b", "#8fb"],
        label: "Euro",
        borderWidth: 0,
        fontSize: 40,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        enabled: false,
      },
      border: {
        display: false,
      },
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Pie Chart",
      },
    },
  },
});
