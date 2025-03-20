class PortfolioChart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.drawChart();
  }

  render() {
    this.shadowRoot.innerHTML = `<style>
          :host { display: block; }
          svg { width: 100%; height: auto; }
      </style>
      <div id="chart"></div>`;
  }

  drawChart() {
    import("d3").then((d3) => {
      const width = 400,
        height = 400,
        radius = Math.min(width, height) / 2;
      const container = this.shadowRoot.getElementById("chart");

      const svg = d3
        .select(container)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

      const assets = {
        stocks: 15000,
        options: 5000,
        bonds: 10000,
      };

      const color = d3
        .scaleOrdinal()
        .domain(Object.keys(assets))
        .range(["#1f77b4", "#ff7f0e", "#2ca02c"]);

      const pie = d3.pie().value((d) => d[1]);
      const data_ready = pie(Object.entries(assets));

      const arc = d3.arc().innerRadius(0).outerRadius(radius);

      svg
        .selectAll("pieces")
        .data(data_ready)
        .enter()
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => color(d.data[0]))
        .style("stroke", "#fff");

      svg
        .selectAll("labels")
        .data(data_ready)
        .enter()
        .append("text")
        .text((d) => d.data[0])
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .style("text-anchor", "middle")
        .style("font-size", "14px");
    });
  }
}

customElements.define("portfolio-chart", PortfolioChart);
