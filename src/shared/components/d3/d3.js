class OptionsChart extends HTMLElement {
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
      const width = 600,
        height = 400,
        margin = { top: 20, right: 20, bottom: 40, left: 50 };
      const container = this.shadowRoot.getElementById("chart");

      const svg = d3
        .select(container)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const options = [
        { type: "buy", strike: 100, premium: 5 },
        { type: "sell", strike: 120, premium: 2 },
      ];

      const stockPrices = d3.range(50, 150, 2);

      const calculatePnL = (price) => {
        return options.reduce((totalPnL, option) => {
          const intrinsicValue = Math.max(price - option.strike, 0);
          return totalPnL + (option.type === "buy" ? intrinsicValue - option.premium : option.premium - intrinsicValue);
        }, 0);
      };

      const pnlData = stockPrices.map((price) => ({ price, pnl: calculatePnL(price) }));

      const xScale = d3.scaleLinear().domain([50, 150]).range([0, width]);
      const yScale = d3
        .scaleLinear()
        .domain([d3.min(pnlData, (d) => d.pnl), d3.max(pnlData, (d) => d.pnl)])
        .range([height, 0]);

      svg.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(xScale));
      svg.append("g").call(d3.axisLeft(yScale));

      const line = d3
        .line()
        .x((d) => xScale(d.price))
        .y((d) => yScale(d.pnl))
        .curve(d3.curveMonotoneX);

      svg
        .append("path")
        .datum(pnlData)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("d", line);

      // Calculate break-even points
      const totalPremium = options.reduce(
        (sum, option) => sum + (option.type === "buy" ? option.premium : -option.premium),
        0
      );
      const breakEvenPoints = options.map((option) => option.strike + totalPremium);

      // Draw break-even points
      breakEvenPoints.forEach((point) => {
        svg
          .append("line")
          .attr("x1", xScale(point))
          .attr("x2", xScale(point))
          .attr("y1", 0)
          .attr("y2", height)
          .attr("stroke", "red")
          .attr("stroke-dasharray", "5,5");
      });
    });
  }
}

customElements.define("options-chart", OptionsChart);
