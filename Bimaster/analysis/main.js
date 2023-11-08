// sidebar active class loop
const sidebarLis = document.querySelectorAll("aside ul li");
sidebarLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        sidebarLis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

// Culumative canvas
const Culumative = document.getElementById("cumulative").getContext("2d");
Chart.defaults.font.size = 10;



let CulumativeChart = new Chart(Culumative, {
    type: 'line',
    data: {
      labels: ["",'10-31', '11-01', '11-02', '11-03', '11-04', '11-05', '11-06', ""],
      datasets: [
        {
        label: 'Cumulative BTC Trend ',
        data: [,1.3, 1.15, 1.64, 3.93, 2.51, 1.86, 2.21,],
        borderWidth: 2,
        pointStyle:"circle",
        borderColor: "#f7a600",
        tension: 0.5,
        backgroundColor: "#f7a600",
        fill : false
      },
      {
        label: 'Cumulative PNL(%)',
        data: [,-0.31, 0, 1.1, 1.96, 3, 2.33, 3.34,],
        borderWidth: 1.,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },

    
    options: {
      interaction: {
        mode: "index"
      },
      responsive: true,
      
        plugins : {
          layout: {
            padding: {
              top: 20  // Adjust the value as per your requirement
            }
          },
            legend: {
              position: 'top',
              align: 'end',
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                    usePointStyle: true,
                    pointStyle: '',
                    font: {
                        size: 12
                    },
                    color : "#81858c",
                }
            }
        },
      scales: {
        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + "%";
                    },
                    color: "#81858c",
                    stepSize: 5,

                },
          grid : {
              color: "#ffffff2e",
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 10,
            },
          beginAtZero: true,
          grid : {
              display: false,
          }
        }
      }
    },
});

// asset
const asset = document.getElementById("Asset");


let assetChart = new Chart(asset, {
  type: 'doughnut',
  data: {
    labels: ['USDT 99.98%', "MEME 0.02%"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [40,1],
        backgroundColor: ['#0365f4', "orange"],
        cutout: "80%",
        borderWidth : 0,
      }
    ]
  },
  options : {
    plugins : {
      legend : {
        display: false
      }
    }
  },
});




// generate legend
function generateLegend()
{
    const chartBox = document.querySelector(".Asset");
    const div =document.createElement("div");
    div.setAttribute("id", "custom");

    const ul = document.createElement("ul");

    assetChart.legend.legendItems.forEach((dataset, index) => {
      const text = dataset.text;
      const bgColor = dataset.fillStyle;

      const li = document.createElement("li");
      li.style.padding = "1px 3px";
      li.style.backgroundColor = "#9e9e9e29";

      const span = document.createElement("span");
      span.style.backgroundColor = `${bgColor}`;

      // text
      const p = document.createElement("P");
      p.style.fontSize = "12px";
      p.style.marginLeft = "5px";
      p.textContent = text;

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(p);

    div.appendChild(ul);
    chartBox.appendChild(div);
    });

 
}


generateLegend();


const Daily = document.getElementById('Daily');

let dailyChart = new Chart(Daily, {
  type: 'bar',
  data: {
    labels: ["",'10-31', ,'11-01', ,'11-02', ,'11-03', ,'11-04', ,'11-05', ,'11-06', ""],
    datasets: [{
      label: 'Daily PNL',
      data: [,-10.31, ,2.1, ,36.6, ,28.2, ,33.5, ,-21.5, ,16.8,],
      borderWidth: 1,
      backgroundColor: ["","#ef454a", ,"#20b26c", ,"#20b26c", ,"#20b26c", ,"#20b26c", ,"#ef454a", ,"#20b26c",""]
    }]
  },
  options: {
    responsive: true,
    plugins : {
      legend : {
        display: false
      }
    },
    scales: {
      y: {
        ticks : {
          color: "#81858c",
          stepSize: 10,
      },
      grid : {
        color: "#ffffff2e"
    }
      },
      x: {
        ticks : {
          color: "#81858c",
          stepSize: 20
      },
      grid : {
        display : false,
    }
      }
    }
  }
});

const Net = document.getElementById("Net");

let NetChart = new Chart(Net, {
  type: 'line',
  data: {
    labels: ["",'10-31', '11-01', '11-02', '11-03', '11-04', '11-05', '11-06', ""],
    datasets: [
      {
      label: 'Net Worth',
      data: [,3318.9, 3319.3, 3355.8, 3392.3, 3420.5, 3382, 3404,],
      borderWidth: 2,
      pointStyle:"circle",
      borderColor: "#f7a600",
      tension: 0,
      backgroundColor: "#f7a600",
      fill : false
    }
  ]
  },

  
  options: {
    responsive: true,
      plugins : {
          legend: {
            display: false
          }
      },
    scales: {
      y: {
              ticks : {
                  callback: (value, index, values) => {
                      return value + ".00";
                  },
                  color: "#81858c",
                  stepSize: 200,

              },
        grid : {
            color: "#ffffff2e",
        }
      },
      x: {
          ticks : {
              color: "#81858c",
          },
        beginAtZero: true,
        grid : {
            display: false,
        }
      }
    }
  },
});


const profits = document.getElementById("Profits");

let profitsChart = new Chart(profits, {
    type: 'line',
    data: {
      labels: ["",'10-31', '11-01', '11-02', '11-03', '11-04', '11-05', '11-06', ""],
      datasets: [
      {
        label: 'Profits',
        data: [,0, 0, 36.6, 28.2, 33.5, -21.5, 0,],
        borderWidth: 0.8,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },

    
    options: {
      responsive: true,
        plugins : {
            legend: {
              display: false
            }
        },
      scales: {
        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + ".00";
                    },
                    color: "#81858c",
                    stepSize: 5,

                },
          grid : {
              color: "#ffffff2e",
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 2,
            },
          beginAtZero: true,
          grid : {
              display: false,
          }
        }
      }
    },
});

// days loop
const daysLi = Array.from(document.querySelectorAll(".days li:not(:last-child)"));

console.log(daysLi);
const charts = [CulumativeChart, dailyChart, 
  profitsChart, NetChart];

daysLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    daysLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.textContent.includes("30"))
    {
      charts.forEach((chart) => {
        chart.data.labels = ["",
        "10-08",
        "",
        "",
        "10-11",
        "",
        "",
        "10-14",
        "",
        "",
        "10-17",
        "",
        "",
        "10-20",
        "",
        "",
        "10-23",
        "",
        "",
        "10-26",
        "",
        "",
        "10-29",
        "",
        '',
        '11-01',
        '',
        '',
        '11-05',
        '',
        '',
        "11-08",
        ""];
        if (chart.data.datasets[0].label == 'Cumulative PNL(%)')
        {
          if (chart.data.datasets[0].data.length > 20)
          {
            return;
          }else {
            chart.data.datasets[0].data.push(-2.25, 2.59, 22.1, 1.93, 33.5, 6.79, 7.66, 7.95 , 19.3, 22.11, 24.17, 22.93, 21.99, 22.67, 24.27, 24.9, 24.69, 27.5, 25.76, 23.71, 30, 36, 0);
            chart.data.datasets[1].data.push(2.56, 2.89, 5, 9, 24, 60, 60, 11 , 5, 15, 13, 31, 60, 20, 22, 24, 16, 18, 32.5, 48, 3, 0, 10);
          }
  
        }else if (chart.data.datasets[0].label == "Daily PNL")
        {
          chart.data.datasets[0].backgroundColor = ["#20b26c", "#ef454a"  ,"#20b26c" ,"#20b26c" ,"#20b26c" ,"#20b26c" ,"#ef454a" ,"#20b26c",
          "#20b26c",
          "#20b26c",
          "#ef454a",
          "#ef454a",
          "#20b26c",
          "#20b26c",
          "#20b26c",
          "#ef454a",
          "#20b26c",
          "#20b26c",
          "#ef454a",
          "#20b26c",
          "#20b26c",
          "#20b26c",
          "#20b26c",
          "#20b26c",
          "#ef454a",
          "#ef454a",
          "#20b26c",
          "#20b26c",
          "#20b26c"
          ];
          chart.data.datasets[0].data.push(18.2, -6.3, 17.40, 18.73, -1.5, 24.68, 17.72, 18.6 , 56.6, 41.6, -6.8, -10.31, 2.1, 36.6, 28.2, 33.5, -21.5, 16.8);
        }
        else {
          if (chart.data.datasets[0].data.length > 20)
        
          {
            return;
            
          }else {
            chart.data.datasets[0].data.push(2.73, 2.09, 1.71, 1.44, 2.85, 6.27, 7.13, 7.43 , 18.45, 21.51, 23.56, 22.33, 21.4, 22.07, 23.67, 23.48, 24.08, 26.88, 25.15, 24.35, 25.41, 25.53, 25.02);
            chart.data.datasets[1].data.push(1.94, 2.54, 2.35, 2.96, 3.53, 3.49, 4.3, 4.9 , 6.5, 7.7, 9.03, 8.79, 9.99, 10.73, 11.13, 11.72, 12.29, 12.43, 12.95, 13.55, 14.14, 13.88, 13.91);
          }
          
        }

        chart.update();
      });
      // table
      function appendRow(date, daily, cumulative, cumulativePercent)
      {
        let row = document.createElement("div");
        row.className = "row";
        let spans = [];
        for (let i = 0; i < 4; i++)
        {
          spans.push(document.createElement("span"));
        }
        
        spans[0].textContent = date;
        spans[1].textContent = daily;
        spans[2].textContent = cumulative;
        spans[3].textContent = cumulativePercent;
        for (let i = 0; i < 4; i++)
        {
          row.appendChild(spans[i]);
        }
        document.querySelector(".table .body").appendChild(row);
      }
      appendRow("2023-10-14", "$ 1.02", "$38", "7%");
      appendRow("2023-10-13", "$ 1.02", "$38", "7%");
      appendRow("2023-10-12", "$ 1.02", "$38", "7%");
      appendRow("2023-10-11", "$ 1.02", "$38", "7%");
      appendRow("2023-10-10", "$ 1.02", "$38", "7%");
      appendRow("2023-10-9", "$ 1.02", "$38", "7%");
      appendRow("2023-10-8", "$ 1.02", "$38", "7%");
      appendRow("2023-10-7", "$ 1.02", "$38", "7%");
      appendRow("2023-10-6", "$ 1.02", "$38", "7%");
      appendRow("2023-10-5", "$ 1.02", "$38", "7%");
      appendRow("2023-10-4", "$ 1.02", "$38", "7%");
      appendRow("2023-10-3", "$ 1.02", "$38", "7%");
      appendRow("2023-10-2", "$ 1.02", "$38", "7%");
      appendRow("2023-10-1", "$ 1.02", "$38", "7%");
      appendRow("2023-9-30", "$ 1.02", "$38", "7%");
      appendRow("2023-9-29", "$ 1.02", "$38", "7%");
      appendRow("2023-9-28", "$ 1.02", "$38", "7%");
      appendRow("2023-9-27", "$ 1.02", "$38", "7%");
      appendRow("2023-9-26", "$ 1.02", "$38", "7%");
      appendRow("2023-9-25", "$ 1.02", "$38", "7%");
      appendRow("2023-9-24", "$ 1.02", "$38", "7%");
      appendRow("2023-9-23", "$ 1.02", "$38", "7%");
      appendRow("2023-9-22", "$ 1.02", "$38", "7%");
      appendRow("2023-9-21", "$ 1.02", "$38", "7%");

    }else if (e.currentTarget.textContent.includes("7"))
    {
      charts.forEach((chart) => {
        chart.data.labels = ["",'10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20',""];
        if (chart.data.datasets[0].label == 'Cumulative PNL(%)')
        {
          chart.data.datasets[0].data = [,8, 7, 6, 5.5, 5.2, 5.2, 5.2,];
          chart.data.datasets[1].data = [,2, 4, 3, 2, 3, 4.2, 4,];
          
        }else if (chart.data.datasets[0].label == "Daily PNL") {
          console.log(chart);
          chart.data.datasets[0].data = [,46, ,-1, ,-3, ,-5, ,-0.5, ,-0.5, ,0.5,];
          chart.data.labels = ["",'10-14', ,'10-15', ,'10-16', ,'10-17', ,'10-18', ,'10-19', ,'10-20', ""];
        }else if (chart.data.datasets[0].label == "Net Worth")
        {
          chart.data.datasets[0].data = [,620, 400, 400, 300, 100, 30, 40,];
        }else if (chart.data.datasets[0].label == "Profits")
        {
          chart.data.datasets[0].data = [,46, 45, 41, 37, 37.5, 37.5, 37.5,];
        }
        chart.update();
      });
      document.querySelector(".table .body").innerHTML = `
      <div class="row">
      <span>2023-11-02</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-11-03</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-18</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-17</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-16</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-15</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
      `
    }
  });
});

