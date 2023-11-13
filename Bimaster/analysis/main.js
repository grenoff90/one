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
      labels: ["",  '11-07', '11-08', '11-09', '11-10', '11-11', '11-12', '11-13', ""],
      datasets: [
        {
        label: 'Cumulative BTC Trend ',
        data: [,1, 1.65, 4.71, 6.43, 5.94, 5.75, 5.31,],
        borderWidth: 2,
        pointStyle:"circle",
        borderColor: "#f7a600",
        tension: 0.5,
        backgroundColor: "#f7a600",
        fill : false
      },
      {
        label: 'Cumulative PNL(%)',
        data: [,  0.51, 0.34, 1.52, 2.03, 2.01, 2.23, 2.23, ],
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
    labels: ["", '11-07', ,'11-08', ,'11-09', ,"11-10", , '11-11', , '11-12', ,'11-13',  ""],
    datasets: [{
      label: 'Daily PNL',
      data: [  ,16.8, , -5.5, , 39.2, ,16.94 , , -0.2 , , 7.13, ,-0.02,],
      borderWidth: 1,
      backgroundColor: ["" ,"#20b26c", ,"#ef454a", ,"#20b26c", ,"#20b26c", ,"#ef454a", ,"#20b26c",  ,"#ef454a", ""]
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
    labels: ["",  '11-07', '11-08', '11-09', '11-10', '11-11', '11-12', '11-13', ""],
    datasets: [
      {
      label: 'Net Worth',
      data: [, 3384.3, 3414, 3430.7, 3425.26, 3459.46, 3466.7, 3466.4, ],
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
      labels: ["",  '11-07', '11-08', '11-09', '11-10', '11-11', '11-12', '11-13', ""],
      datasets: [
      {
        label: 'Profits',
        data: [,16.8, 11.3, 50.5, 67.44,  67.42, 74.55, 74.53],
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
      document.querySelector(".three").textContent = "+16.29%"
      if (e.currentTarget.textContent.includes("7")) {
      document.querySelector(".three").textContent = "+3.34%"
      }
      document.querySelector(".four").innerHTML = `
      <div class="row">
      <span>2023-11-09</span>
      <span>$27.9</span>
      <span>$499.18</span>
      <span>16.29%</span>
  </div>
      <div class="row">
      <span>2023-11-08</span>
      <span>$ 34.2</span>
      <span>$482.4</span>
      <span>
      15.89%</span>
  </div>
  <div class="row">
      <span>2023-11-07</span>
      <span>$ -1.5</span>
      <span>$461.6</span>
      <span>15.46%</span>
  </div>
  <div class="row">
      <span>2023-11-06</span>
      <span>$ 16.8</span>
      <span>$464.94</span>
      <span>15.76%</span>
  </div>
  <div class="row">
      <span>2023-11-05</span>
      <span>$ -21.5</span>
      <span>$463.46</span>
      <span>15.7%</span>
  </div>
  <div class="row">
      <span>2023-11-04</span>
      <span>$ 33.5</span>
      <span>$484.12</span>
      <span>16.4%</span>
  </div>
  <div class="row">
      <span>2023-11-03</span>
      <span>$ 28.2</span>
      <span>$451.65</span>
      <span>15.3%</span>
  </div>
  <div class="row">
      <span>2023-11-02</span>
      <span>$ 36.6</span>
      <span>$419.18</span>
      <span>14.2%</span>
  </div>
  <div class="row">
      <span>2023-11-01</span>
      <span>$ 2.1</span>
      <span>$383</span>
      <span>13%</span>
  </div>
  <div class="row">
      <span>2023-10-31</span>
      <span>$  -10.31</span>
      <span>$381.24</span>
      <span>12.9%</span>
  </div>
  <div class="row">
      <span>2023-10-30</span>
      <span>$ 41.6</span>
      <span>$397.27</span>
      <span>13.41%</span>
  </div>
  <div class="row">
      <span>2023-10-29</span>
      <span>$ 0.02</span>
      <span>$356.6</span>
      <span>12.49%</span>
  </div>
  <div class="row">
      <span>2023-10-28</span>
      <span>$ 18.6</span>
      <span>$367.47</span>
      <span>12.68%</span>
  </div>
  <div class="row">
      <span>2023-10-27</span>
      <span>$ 17.72</span>
      <span>$361.75</span>
      <span>12.58%</span>
  </div>
  <div class="row">
      <span>2023-10-26</span>
      <span>$ 24.28</span>
      <span>$356.23</span>
      <span>12.56%</span>
  </div>
  <div class="row">
      <span>2023-10-25</span>
      <span>$ -1.5</span>
      <span>$346.53</span>
      <span>12.43%</span>
  </div>
  <div class="row">
      <span>2023-10-24</span>
      <span>$ 18.73</span>
      <span>$356.27</span>
      <span>12.49%</span>
  </div>
  <div class="row">
      <span>2023-10-23</span>
      <span>$ 17.4</span>
      <span>$345.27</span>
      <span>12.57%</span>
  </div>
  <div class="row">
      <span>2023-10-22</span>
      <span>$ -6.38</span>
      <span>$338.65</span>
      <span>12.4%</span>
  </div>
  <div class="row">
      <span>2023-10-21</span>
      <span>$ 18.2</span>
      <span>$352.27</span>
      <span>13.31%</span>
  </div>
  <div class="row">
      <span>2023-10-20</span>
      <span>$ -22</span>
      <span>$341.27</span>
      <span>13.04%</span>
  </div>
  <div class="row">
      <span>2023-10-19</span>
      <span>$ 30</span>
      <span>$351.27</span>
      <span>13.09%</span>
  </div>
  <div class="row">
      <span>2023-10-18</span>
      <span>$ 28.5</span>
      <span>$322.45</span>
      <span>13.04%</span>
  </div>
  <div class="row">
      <span>2023-10-17</span>
      <span>$ 3</span>
      <span>$299.27</span>
      <span>13.56%</span>
  </div>
  <div class="row">
      <span>2023-10-16</span>
      <span>$32</span>
      <span>$297.98</span>
      <span>13.64%</span>
  </div>
  <div class="row">
      <span>2023-10-15</span>
      <span>$ -9.15</span>
      <span>$263.44</span>
      <span>12.47%</span>
  </div>
  <div class="row">
      <span>2023-10-14</span>
      <span>$ 28.2</span>
      <span>$275.54</span>
      <span>12.89%</span>
  </div>
  <div class="row">
      <span>2023-10-13</span>
      <span>$ 0</span>
      <span>$241.54</span>
      <span>12.75%</span>
  </div>
  <div class="row">
      <span>2023-10-12</span>
      <span>$ 36.6</span>
      <span>$248.97</span>
      <span>12.99%</span>
  </div>
  <div class="row">
      <span>2023-10-11</span>
      <span>$ 0 </span>
      <span>$205.35</span>
      <span>11.67%</span>
  </div>
  
  
      `
      charts.forEach((chart) => {
        chart.data.labels = ["",
        
        "10-14",
        "",
        "",
        "",
        "",
        "10-19",
        "",
        "",
        "",
        "",
        "10-24",
        "",
        "",
        "",
        "",
        "10-29",
        "",
        "",
        "",
        "",
        '11-03',
        '',
        '',
        '',
        '11-08',
        '',
        '',
        "",
        "",
        ""
        ];
        if (chart.data.datasets[0].label == 'Cumulative PNL(%)')
        {
          if (chart.data.datasets[0].data.length > 20)
          {
            return;
          }else {
            chart.data.datasets[0].data.push(10.87, 11.77, 23.58, 26.77, 28.91, 27.62, 26.65, 27.35 , 29.02, 28.95, 31.86, 30.06, 29.24, 30.52, 30.33, 30.46, 31.78, 32.63, 36.61, 38.86, 38.22, 38.14, 0);
            chart.data.datasets[1].data.push(2.56, 2.89, 5, 9, 24, 60, 60, 11 , 5, 15, 13, 31, 60, 20, 22, 24, 16, 18, 32.5, 48, 3, 0, 10);
          }
  
        }else if (chart.data.datasets[0].label == "Daily PNL") {
          chart.data.datasets[0].backgroundColor = [];
          chart.data.datasets[0].data = [];
        
          var newBackgroundColor = [" ","#20b26c", "#ef454a", "#20b26c", "#20b26c", "#20b26c", "#20b26c", "#ef454a", "#20b26c",
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
            "#20b26c",
            "#20b26c",
            "#20b26c",
            "#ef454a",
            "#20b26c",
            "#20b26c",
            "#20b26c",
            "#20b26c",
            "#ef454a",
            ""
          ];
        
          var newData = [  , 17.3, -9.15 , 32,3 , 28.5 , 30 ,-22 ,18.2 ,-6.38, 17.40 ,18.73, -1.5, 24.68, 17.72, 18.6, 56.6, 41.6, -6.8, -10.31, 2.1, 36.6, 33.5, 29.5, 16.8, -5.5, 39.2, 16.94, -0.2 , 7.13 ];
        
          Array.prototype.push.apply(chart.data.datasets[0].backgroundColor, newBackgroundColor);
          Array.prototype.push.apply(chart.data.datasets[0].data, newData);
        }
        else {
          if (chart.data.datasets[0].data.length > 20)
        
          {
            return;
            
          }else {
            chart.data.datasets[0].data.push(2.73, 2.09, 1.71, 1.44, 2.85, 6.27, 7.13, 7.43 , 18.45, 21.51, 23.56, 22.33, 21.4, 22.07, 23.67, 23.48, 24.08, 28, 27.82, 27.95, 29.24, 30.07, 33.38);
            chart.data.datasets[1].data.push(1.94, 2.54, 2.35, 2.96, 3.53, 3.49, 4.3, 4.9 , 6.5, 7.7, 9.03, 8.79, 9.99, 10.73, 11.13, 10.92, 12.29, 12.43, 12.95, 13.55, 14.14, 
              15.89, 16.29);
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
  //     document.querySelector(".table .body").innerHTML = `
  //     <div class="row">
  //     <span>2023-11-02</span>
  //     <span>$ 0.02</span>
  //     <span>$37.27</span>
  //     <span>6.4%</span>
  // </div>
  // <div class="row">
  //     <span>2023-11-03</span>
  //     <span>$ 0.02</span>
  //     <span>$37.27</span>
  //     <span>6.4%</span>
  // </div>
  // <div class="row">
  //     <span>2023-10-18</span>
  //     <span>$ 0.02</span>
  //     <span>$37.27</span>
  //     <span>6.4%</span>
  // </div>
  // <div class="row">
  //     <span>2023-10-17</span>
  //     <span>$ 0.02</span>
  //     <span>$37.27</span>
  //     <span>6.4%</span>
  // </div>
  // <div class="row">
  //     <span>2023-10-16</span>
  //     <span>$ 0.02</span>
  //     <span>$37.27</span>
  //     <span>6.4%</span>
  // </div>
  // <div class="row">
  //     <span>2023-10-15</span>
  //     <span>$ 0.02</span>
  //     <span>$37.27</span>
  //     <span>6.4%</span>
  // </div>
  //     `
    }
  });
});

