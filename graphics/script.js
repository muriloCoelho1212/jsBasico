fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
  .then((response) => response.json())
  .then((data) => {
    const years = data.data.map((item) => item.Year);
    const population = data.data.map((item) => item.Population);

    const trace = {
      x: years,
      y: population,
      type: "scatter",
      mode: "lines+markers",
      marker: { color: "blue" },
    };

    const layout = {
      title: "US Population Over the Years",
      xaxis: { title: "Year" },
      yaxis: { title: "Population" },
    };

    Plotly.newPlot("chart", [trace], layout);
  })
  .catch((error) => {
    console.error("Error fetching the data:", error);
    document.getElementById("chart").innerText = "Failed to load data";
  });
